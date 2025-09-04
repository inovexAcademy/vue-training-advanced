<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { useTemplateRef } from 'vue';

const compB = useTemplateRef('compB');
const mouse = useMouse(compB);
</script>

<template>
  <div ref="compB" class="b">
    <h1>Component B</h1>
    <pre>Relative Position: x {{ mouse.x }} y {{ mouse.y }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.b {
  position: absolute;
  width: 350px;
  height: 200px;
  top: 300px;
  left: 250px;

  background: rgb(73, 223, 163);
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 10px gray;
}
</style>
