import { computed, ref } from 'vue';

let store: ReturnType<typeof _useCountStore> | null = null;
// Singleton pattern to ensure a single store instance
export const useCountStore = () => {
  if (store) return store;
  store = _useCountStore();
  return store;
};

// Actual store implementation, would be per call when used directly
const _useCountStore = () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
  };
};
