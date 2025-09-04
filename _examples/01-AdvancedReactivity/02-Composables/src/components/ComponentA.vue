<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { useTemplateRef } from 'vue';

const compA = useTemplateRef('compA');
const mouse = useMouse(compA);
</script>

<template>
  <div ref="compA" class="a">
    <h1>Component A</h1>
    <pre>Relative Position: x {{ mouse.x }} y {{ mouse.y }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.a {
  position: absolute;
  width: 330px;
  left: 20px;

  background: rgb(189, 125, 242);
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 10px gray;
}
</style>
