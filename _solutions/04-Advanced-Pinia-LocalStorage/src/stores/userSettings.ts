import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Theme = 'light' | 'dark';

export const useUserSettingsStore = defineStore(
  'userSettings',
  () => {
    const theme = ref<Theme>('dark');
    const userName = ref<string>('Guest');

    return {
      theme,
      userName,
    };
  },
  {
    persist: {
      pick: ['theme'],
    },
  },
);
