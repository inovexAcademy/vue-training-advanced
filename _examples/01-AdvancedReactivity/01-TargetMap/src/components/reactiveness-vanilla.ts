// --- minimal Vue 3–style reactivity sketch ---

// targetMap: WeakMap<object, Map<key, Set<ReactiveEffect>>>
const targetMap = new WeakMap();

let activeEffect = null;

// Wrap a function so we can track which deps it touches while it runs
function effect(fn) {
  const reactiveEffect = function runner() {
    cleanup(runner);
    activeEffect = runner;
    try {
      return fn();
    } finally {
      activeEffect = null;
    }
  };
  // Each effect keeps a list of Sets it belongs to for cleanup
  reactiveEffect.deps = [];
  reactiveEffect(); // run once to collect deps
  return reactiveEffect;
}

function cleanup(runner) {
  // remove the runner from all dependency sets it was previously in
  for (const dep of runner.deps) dep.delete(runner);
  runner.deps.length = 0;
}

// Called on property GETs
function track(target, key) {
  if (!activeEffect) return;

  let depsMap = targetMap.get(target);
  if (!depsMap) targetMap.set(target, (depsMap = new Map()));

  let dep = depsMap.get(key);
  if (!dep) depsMap.set(key, (dep = new Set()));

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    // Record back-reference so we can clean up later
    activeEffect.deps.push(dep);
  }
}

// Called on property SETs
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;

  const dep = depsMap.get(key);
  if (!dep) return;

  // Re-run every effect that depends on target[key]
  // (Vue batches & dedupes; we keep it simple.)
  dep.forEach(runner => runner());
}

// Make a reactive object using a Proxy
function reactive(target) {
  return new Proxy(target, {
    get(t, key, rcv) {
      const res = Reflect.get(t, key, rcv);
      track(t, key); // collect dependency
      return res;
    },
    set(t, key, value, rcv) {
      const old = t[key];
      const result = Reflect.set(t, key, value, rcv);
      if (old !== value) trigger(t, key); // notify dependents
      return result;
    },
  });
}

// --- usage: a "component render" that reads state.count ---

const state = reactive({ count: 0 });

// Think of this as the component's render effect:
const render = effect(() => {
  // Reading state.count during an active effect causes:
  // track(state, 'count') → targetMap[state].get('count') includes this effect
  console.log(`render: count = ${state.count}`);
});

// Mutations notify the stored effect via trigger → dep → effect runner
state.count++; // logs: "render: count = 1"
state.count++; // logs: "render: count = 2"

// For learning/inspection only: peek at how it's stored
// (In real Vue internals you wouldn't inspect this.)
console.log(targetMap);
/*
Structure:
WeakMap {
  state → Map {
    'count' → Set { renderEffectRunner }
  }
}
*/
