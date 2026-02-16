import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStoreB } from './storeB';

export const useStoreA = defineStore('storeA', () => {
  const storeB = useStoreB();
  const name = ref(`Store A uses ${storeB.name}`);

  return {
    name
  };
});
