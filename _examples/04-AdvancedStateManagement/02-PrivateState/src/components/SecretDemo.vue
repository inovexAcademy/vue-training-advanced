<script lang="ts" setup>
import { useSecretStore } from '../store/secretStore';

const secretStore = useSecretStore();
console.debug('🔥 secretStore.$state', secretStore.$state);
</script>

<template>
  <div class="app">
    Secret:
    <!-- Secret is not exposed anymore, resulting in error -->
    <!-- <pre>{{ secretStore.secret || 'undefined' }}</pre> -->
    <br />
    Censored Secret:
    <pre>{{ secretStore.censoredSecret }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.app {
  margin: 0 auto;
  padding: 16px;
}
</style>
