<script lang="ts" setup>
import { useStoreB } from '@/store/storeB';

const storeB = useStoreB();
</script>

<template>
  <div ref="compB" class="b">
    <h1>Component B</h1>

    {{ storeB.name }}
  </div>
</template>

<style lang="scss" scoped>
.b {
  position: absolute;
  width: 350px;
  height: auto;
  top: 40px;
  left: auto;
  right: 20px;

  background: rgb(73, 223, 163);
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 10px gray;
}
</style>
