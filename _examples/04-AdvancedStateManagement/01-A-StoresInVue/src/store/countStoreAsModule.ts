import { computed, ref } from "vue";

const count = ref(0)

const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

const myStoreAsModule = {
  count,
  doubleCount,
  increment,
  decrement
}

export default myStoreAsModule;
