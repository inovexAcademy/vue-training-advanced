<script lang="ts" setup>
import { useFilterCriteriaStore } from '../store/filterCriteriaWithVueUse';

const filterCriteriaStore = useFilterCriteriaStore();
</script>

<template>
  <div class="app">
    <h1 class="title">Pinia + LocalStorage = 🫶</h1>
    <div class="filter">
      <h2 class="filter-title">Filter Criteria</h2>
      <label for="mileage">Mileage:</label>
      <input
        id="mileage"
        :value="filterCriteriaStore.mileage"
        type="number"
        @input="
          filterCriteriaStore.setMileage(
            Number(($event.target as HTMLInputElement).value),
          )
        "
      />
      <label for="engineType">Engine Type:</label>
      <select
        id="engineType"
        :value="filterCriteriaStore.engineType"
        @change="
          filterCriteriaStore.setEngineType(
            ($event.target as HTMLSelectElement).value as
              | 'electric'
              | 'combustion'
              | 'hybrid',
          )
        "
      >
        <option value="electric">Electric</option>
        <option value="combustion">Combustion</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <label for="priceRange">Price Range:</label>
      <input
        id="priceRange"
        :value="filterCriteriaStore.priceRange.min"
        type="range"
        min="0"
        max="100000"
        @input="
          filterCriteriaStore.setPriceRange(
            Number(($event.target as HTMLInputElement).value),
            filterCriteriaStore.priceRange.max,
          )
        "
      />
      <input
        id="priceRange"
        :value="filterCriteriaStore.priceRange.max"
        type="range"
        min="0"
        max="100000"
        @input="
          filterCriteriaStore.setPriceRange(
            filterCriteriaStore.priceRange.min,
            Number(($event.target as HTMLInputElement).value),
          )
        "
      />
    </div>

    <div class="selection">
      <p>Current Mileage: {{ filterCriteriaStore.mileage }}</p>
      <p>Current Engine Type: {{ filterCriteriaStore.engineType }}</p>
      <p>
        Current Price Range: {{ filterCriteriaStore.priceRange.min }} -
        {{ filterCriteriaStore.priceRange.max }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

.title {
  text-align: center;
  margin-bottom: 16px;
}

.filter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.selection {
  margin-top: 16px;
  padding: 12px 8px;
  border: 2px solid rgb(67, 120, 90);
  border-radius: 8px;
  background-color: rgb(205, 238, 227);
}
</style>
