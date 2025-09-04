import { Dog, getAllDogs } from '@/api';
import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

export const useDogStore = defineStore('dogs', () => {
  const dogs = ref<Dog[]>(undefined);
  const minAwesomeness = ref<number>(-1);
  const error = ref<{ message: string } | undefined>();

  const filteredDogs = computed<Dog[]>(() => {
    if (minAwesomeness.value === -1) {
      return dogs.value;
    }
    return dogs.value.filter(dog => dog.awesomeness >= minAwesomeness.value);
  });

  const allDogAwsmLevels = computed<number[]>(() => {
    const levels = new Set(dogs.value.map(dog => dog.awesomeness));
    return Array.from(levels);
  });

  const setMinAwesomeness = (level: number) => {
    minAwesomeness.value = level;
  };

  const loadDogs = async () => {
    try {
      const { data } = await getAllDogs();

      dogs.value = data;
    } catch (err) {
      error.value = { message: err };
    }
  };

  return {
    // STATE
    dogs: readonly(dogs),
    error,
    // COMPUTED
    minAwesomeness,
    filteredDogs,
    allDogAwsmLevels,
    // ACTIONS
    setMinAwesomeness,
    loadDogs,
  };
});
