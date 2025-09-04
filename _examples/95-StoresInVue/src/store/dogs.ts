import { Dog, getAllDogs } from '@/api';
import { computed, readonly, ref } from 'vue';

export const useVueDogStore = () => {
  const dogs = ref<Dog[]>(undefined);
  const minAwesomeness = ref<number>(0);
  const error = ref<{ message: string } | undefined>();

  const filteredDogs = computed<Dog[]>(() => {
    if (minAwesomeness.value === 0) {
      return dogs.value;
    }
    return dogs.value.filter(dog => dog.awesomeness >= minAwesomeness.value);
  });

  const allDogAwsmLevels = computed<number[]>(() => {
    if (!dogs.value) return [];
    const levels = new Set(dogs.value.map(dog => dog.awesomeness));
    return Array.from(levels);
  });

  const setMinAwesomeness = (level: number) => {
    minAwesomeness.value = level;
  };

  const loadDogs = async () => {
    try {
      const { data } = await getAllDogs();

      setDogs(data);
      return data;
    } catch (err) {
      error.value = { message: err };
    }
  };

  const setDogs = (newDogs: Dog[]) => {
    dogs.value = newDogs;
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
    setDogs,
    loadDogs,
  };
};
