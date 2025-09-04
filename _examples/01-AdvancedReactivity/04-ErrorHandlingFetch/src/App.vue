<script lang="ts" setup>
import { ref } from 'vue';

const data = ref(null);
const hasError = ref<boolean>(false);

const fetchData = async () => {
  hasError.value = false;
  try {
    const result = await fetch('https://vue.doesnotexist.com/data');
    const json = await result.json();
    data.value = json;
  } catch (e) {
    console.error('An error occurred', e);
    hasError.value = true;
  }
};
</script>

<template>
  <div v-if="hasError" class="error">
    <p>An error occurred while fetching data.</p>
  </div>

  <pre v-if="data">{{ data }}</pre>

  <button @click="fetchData">Load Data</button>
</template>

<style scoped lang="scss">
.error {
  position: fixed;
  top: 12px;
  right: 12px;
  color: red;
  background-color: rgb(255, 237, 237);
  font-weight: bold;
  padding: 12px;
  border: 1px solid darkred;
  border-radius: 4px;
}
</style>
