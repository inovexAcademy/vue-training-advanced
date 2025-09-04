import { defineStore } from 'pinia';
import { onBeforeMount, readonly, ref } from 'vue';

export const useFilterCriteriaStore = defineStore('filterCriteria', () => {
  const mileage = ref<number>(0);
  const engineType = ref<'electric' | 'combustion' | 'hybrid'>('electric');
  const priceRange = ref<{ min: number; max: number }>({ min: 0, max: 100000 });

  const setMileage = (value: number) => {
    mileage.value = value;
  };

  const setEngineType = (value: 'electric' | 'combustion' | 'hybrid') => {
    engineType.value = value;
  };

  const setPriceRange = (min: number, max: number) => {
    priceRange.value = { min, max };
  };

  onBeforeMount(() => {
    const savedFilterCriteria = localStorage.getItem('filterCriteria');
    if (savedFilterCriteria) {
      const { mileage, engineType, priceRange } =
        JSON.parse(savedFilterCriteria);
      setMileage(mileage);
      setEngineType(engineType);
      setPriceRange(priceRange.min, priceRange.max);
    }
  });

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
