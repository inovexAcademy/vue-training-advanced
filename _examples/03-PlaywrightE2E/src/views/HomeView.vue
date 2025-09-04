<script setup lang="ts">
import LamaCard from '../components/LamaCard.vue';
import { lamaData } from '../lama-data';
</script>

<template>
  <h1>Lama Chat</h1>
  <p>Welcome to the Lama Chat!</p>
  <p>Choose a Lama to chat with:</p>
  <ul class="lama-list">
    <li v-for="lama in lamaData" :key="lama.id">
      <LamaCard
        :id="lama.id"
        :name="lama.name"
        :description="lama.description"
      />
    </li>
  </ul>
</template>

<style scoped>
h1 {
  margin-top: 0;
}

.lama-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2em;
  justify-content: center;
}
</style>
