import { computed, Ref, ref } from 'vue';

class countStoreClass {
  readonly count: Ref<number>;

  constructor(count = 0) {
    this.count = ref(0);
    this.count.value = count;
  }

  readonly doubleCount = computed(() => this.count.value * 2);

  increment() {
    this.count.value++;
  }

  decrement() {
    this.count.value--;
  }
}

const instance = new countStoreClass();
export { instance as countStoreClassSingleton };
