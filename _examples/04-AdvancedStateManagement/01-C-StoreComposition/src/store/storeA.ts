import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useStoreB } from './storeB';

type StoreAState = {
  name: Ref<string>;
};

export const useStoreA = defineStore('storeA', (): StoreAState => {
  const storeB = useStoreB();
  const name = ref(`Store A uses ${storeB.name}`);

  return {
    name,
  };
});
