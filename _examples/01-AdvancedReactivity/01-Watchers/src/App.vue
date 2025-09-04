<script setup lang="ts">
import { ref, watch } from 'vue';

const currentSeconds = ref<number>(new Date().getSeconds());

setInterval(() => {
  currentSeconds.value = new Date().getSeconds();
}, 1000);

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
