import { defineStore } from 'pinia';
import { ref, readonly } from 'vue';

export const useFilterCriteriaStore = defineStore(
  'filterCriteria',
  () => {
    const mileage = ref<number>(0);
    const engineType = ref<'electric' | 'combustion' | 'hybrid'>('electric');
    const priceRange = ref<{ min: number; max: number }>({
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
      mileage, // readonly(mileage) does not work with the persisted plugin
      engineType,
      priceRange,
      // ACTIONS
      setMileage,
      setEngineType,
      setPriceRange,
    };
  },
  {
    // 🔮🧙‍♂️ the magic happens here
    persist: true,
  },
);
