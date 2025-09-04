<script lang="ts" setup>
import { useDogStore } from './store/dogs';

const dogStore = useDogStore();
</script>

<template>
  <button @click="dogStore.loadDogs">Fetch 🐶</button>

  <h1 v-if="(dogStore.dogs?.length || 0) > 0">The Dogs</h1>

  <div v-for="dog in dogStore.dogs" :key="dog.id">
    {{ dog.name }}
    <span v-for="n in dog.awesomeness" :key="n">⭐</span>
  </div>

  <div v-if="dogStore.error" class="error">
    {{ dogStore.error.message }}
  </div>
</template>

<style lang="scss" scoped>
.error {
  background-color: rgb(246, 206, 206);
  border: 2px solid rgb(166, 102, 102);
  border-radius: 8px;
  padding: 12px 8px;
  margin-top: 16px;
}
</style>
