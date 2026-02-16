import { computed, Ref, ref } from 'vue';

class countStoreClass {
  count: Ref<number>;

  constructor(count = 0) {
    this.count = ref(count);
  }

  readonly doubleCount = computed(() => this.count.value * 2);

  readonly increment = () => {
    this.count.value++;
  }

  readonly decrement = () => {
    this.count.value--;
  }
}

const instance = new countStoreClass();
export { instance as countStoreClassSingleton };
