import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStoreA } from './storeA';

export const useStoreB = defineStore('storeB', () => {
  const storeA = useStoreA();
  const name = ref(`Store B uses ${storeA.name}`);

  return {
    name
  };
});
