<script lang="ts" setup>
import LocalStorageWithPersistedState from './components/LocalStorageWithPersistedState.vue';
import LocalStorageWithVueUse from './components/LocalStorageWithVueUse.vue';
import LocalStorageWithWatch from './components/LocalStorageWithWatch.vue';
</script>

<template>
  <LocalStorageWithWatch v-if="false" />
  <LocalStorageWithVueUse v-if="false" />
  <LocalStorageWithPersistedState />
</template>
