import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useUserSettingsStore = defineStore('userSettings', () => {

  const authStore = useAuthStore();

  const username = ref<string>('Max')
  const theme = ref<'light' | 'dark'>('light');

  function setUsername(newUsername: string) {
    if (authStore.isAdmin) {
      username.value = newUsername;
    }
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  return {
    theme,
    username,
    setUsername,
    toggleTheme,
  }
}, {persist: {storage: sessionStorage}});
