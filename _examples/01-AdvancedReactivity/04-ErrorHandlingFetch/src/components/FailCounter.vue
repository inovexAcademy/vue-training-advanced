<script lang="ts" setup>
import { ref, onErrorCaptured } from 'vue';
const count = ref(0);

const handleClick = () => {
  throw new Error('Fail!');
};

onErrorCaptured(err => {
  console.log('An error occurred: ', err.message);
  return false;
});
</script>

<template>
  <div>{{ count }}</div>
  <button @click="handleClick">+1</button>
</template>
