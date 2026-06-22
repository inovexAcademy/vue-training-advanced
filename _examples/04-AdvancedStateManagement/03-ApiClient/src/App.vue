<script lang="ts" setup>
  import { ref } from 'vue';
  import { Dog, getAllDogs } from '@/api';

  const dogs = ref<Dog[]>([]);
  const error = ref<{ message: string } | undefined>();

  const fetchDogs = async () => {
    try {
      const { data } = await getAllDogs();

      dogs.value = data ?? [];
    } catch (err) {
      error.value = { message: err instanceof Error ? err.message : 'Unknown error' };
    }
  };
</script>

<template>
  <button @click="fetchDogs">Fetch 🐶</button>

  <h1 v-if="dogs.length > 0">The Dogs</h1>
  <div v-for="dog in dogs" :key="dog.id">{{ dog.name }}</div>

  <div v-if="error" class="error">
    {{ error.message }}
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
