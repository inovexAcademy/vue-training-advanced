import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// we don't expose this store but it still picked up by pinia
const usePrivateSecretState = defineStore('secret-store-private', () => {
  const secret = ref('MySecret');

  return { secret }
})

export const useSecretStore = defineStore('secret-store', () => {
  /* Instead of defining the secret here, we get it from the private store
  *  That way, SSR, plugins and devtools still work as expected
  */
  // const secret = ref<string>('MySecret');

  const censoredSecret = computed<string>(() => {
    return '*'.repeat(usePrivateSecretState().secret.length)
  });

  return { censoredSecret };
});
