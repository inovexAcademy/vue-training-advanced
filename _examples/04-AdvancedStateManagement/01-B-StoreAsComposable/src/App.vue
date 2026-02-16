<script lang="ts" setup>
import { reactive } from 'vue';
import { useDogStore } from './store/dogs';

const dogStore = reactive(useDogStore());
</script>

<template>
  <br />
  <button @click="dogStore.loadDogs">Fetch 🐶</button>
  <br />

  <div v-if="(dogStore.dogs?.length || 0) > 0" class="result">
    <h1 class="title">The Dogs</h1>

    <h4 class="filter-title">Filter</h4>
    <div class="filter">
      <button
        v-for="level in dogStore.allDogAwsmLevels"
        :key="level"
        @click="dogStore.setMinAwesomeness(level)"
      >
        At least {{ level }} ⭐
      </button>
    </div>
    <br />

    <div v-for="dog in dogStore.filteredDogs" :key="dog.id">
      {{ dog.name }}
      <span v-for="n in dog.awesomeness" :key="n">⭐</span>
    </div>
  </div>

  <div v-if="dogStore.error" class="error">
    {{ dogStore.error.message }}
  </div>
</template>

<style lang="scss" scoped>
.title {
  border-top: 1px solid rgb(201, 201, 201);
  width: 90%;
}

.filter-title {
  text-align: left;
}
.filter {
  display: flex;
  flex-direction: row;
}

.error {
  background-color: rgb(246, 206, 206);
  border: 2px solid rgb(166, 102, 102);
  border-radius: 8px;
  padding: 12px 8px;
  margin-top: 16px;
}
</style>
