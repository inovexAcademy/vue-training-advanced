<script setup lang="ts">
import { ref, watch } from 'vue';
import Interval from './intervalExample.vue';
import Seconds from './secondsExample.vue';

function fetchPrice(newProduct: string) {
  return Promise.resolve(12);
}

const shown = ref(true);
const product = ref({ name: 'Apple', type: 'fruit' });
const price = ref(0);

watch(
  () => product.value.name,
  async newProduct => {
    console.debug('🔥 watch', newProduct);
    price.value = await fetchPrice(newProduct);
  },
);

const handleChange = e => {
  console.debug('🔥 handlechange', e);
  product.value.name = e.target.value;
};
</script>

<template>
  <p>Total: {{ price }}</p>

  <div v-if="false">
    <h2>Demo Seconds</h2>
    <Seconds></Seconds>
  </div>

  <h2>Demo Interval</h2>
  <Interval v-if="shown"></Interval>
  <button @click="shown = !shown">toggle shown</button>

  <input :value="product.name" @input="handleChange" />
</template>
