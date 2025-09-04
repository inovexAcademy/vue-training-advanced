import { defineStore } from 'pinia';
import { readonly } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export const useFilterCriteriaStore = defineStore('filterCriteria', () => {
  const mileage = useLocalStorage('mileage-vueuse', 0);
  const engineType = useLocalStorage('engineType-vueuse', 'electric');
  const priceRange = useLocalStorage('priceRange-vueuse', {
    min: 0,
    max: 100000,
  });

  const setMileage = (value: number) => {
    mileage.value = value;
  };

  const setEngineType = (value: 'electric' | 'combustion' | 'hybrid') => {
    engineType.value = value;
  };

  const setPriceRange = (min: number, max: number) => {
    priceRange.value = { min, max };
  };

  return {
    // STATE
    mileage: readonly(mileage),
    engineType: readonly(engineType),
    priceRange: readonly(priceRange),
    // ACTIONS
    setMileage,
    setEngineType,
    setPriceRange,
  };
});
