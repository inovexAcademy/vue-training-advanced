import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useStoreA } from './storeA';

type StoreBState = {
  name: Ref<string>;
};

export const useStoreB = defineStore('storeB', (): StoreBState => {
  const storeA = useStoreA();
  const name = ref(`Store B uses ${storeA.name}`);

  return {
    name,
  };
});
