<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

const currentSeconds = ref<number>(new Date().getSeconds());
let currentInterval: NodeJS.Timeout;

onMounted(() => {
  currentInterval = setInterval(() => {
    currentSeconds.value = new Date().getSeconds();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(currentInterval);
});

watch(currentSeconds, async (newCurrentSeconds, oldCurrentSeconds) => {
  console.log({
    oldCurrentSeconds,
    newCurrentSeconds,
  });
});
</script>

<template>
  {{ currentSeconds }}
</template>
