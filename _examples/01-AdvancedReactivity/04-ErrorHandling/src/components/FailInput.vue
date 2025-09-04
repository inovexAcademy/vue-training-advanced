<script lang="ts" setup>
import { onErrorCaptured } from 'vue';

const handleChange = () => {
  throw new Error('Fail!');
};

onErrorCaptured(err => {
  console.log('An error occurred: ', err.message);
  return false;
});
</script>

<template>
  <label for="fail-input">Type something:</label>
  <input id="fail-input" @input="handleChange" />
</template>
