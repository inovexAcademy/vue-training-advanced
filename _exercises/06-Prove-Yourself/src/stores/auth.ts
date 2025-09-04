import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const isAdmin = ref(false);

  async function login(admin?: boolean) {
    // Here, you would typically make an API call to log in the user
    await new Promise(resolve => setTimeout(resolve, 1000));
    isAdmin.value = admin ?? false;
    isAuthenticated.value = true;
  }

  async function logout() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    isAdmin.value = false;
    isAuthenticated.value = false;
  }

  return {
    isAuthenticated,
    isAdmin,
    login,
    logout,
  };
});
