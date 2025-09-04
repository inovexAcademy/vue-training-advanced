<script lang="ts" setup>
import { onErrorCaptured } from 'vue';
import FailCounter from './components/FailCounter.vue';
import FailInput from './components/FailInput.vue';

onErrorCaptured(err => {
  console.error('An error occurred: ', err);
  return false;
});
</script>

<template>
  <FailCounter />
  <br />
  <FailInput />
</template>
