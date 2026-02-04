<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { useCountStore } from '@/store/countStoreAsComposable';
import { useCountStorePinia } from '@/store/countStoreWithPinia';
import { useTemplateRef } from 'vue';
import countStore from '../store/countStoreAsModule';

const compB = useTemplateRef('compB');
const mouse = useMouse(compB);

const composableCountStore = useCountStore();
const piniaCountStore = useCountStorePinia();
</script>

<template>
  <div ref="compB" class="b">
    <h1>Component B</h1>
    <pre>Relative Position: x {{ mouse.x }} y {{ mouse.y }}</pre>

    <div class="card">
      <h3>Module Store</h3>
      <button @click="countStore.decrement">Decrease Count</button>
      <br />
      doubleCount: {{ countStore.doubleCount }}
    </div>

    <br />
    <div class="card">
      <h3>Composable Store</h3>
      <button @click="composableCountStore.decrement">Decrease Count</button>
      <br />
      doubleCount: {{ composableCountStore.doubleCount }}
    </div>

    <br />
    <div class="card">
      <h3>Pinia Store</h3>
      <button @click="piniaCountStore.decrement">Decrease Count</button>
      <br />
      doubleCount: {{ piniaCountStore.doubleCount }}
    </div>
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

.card {
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 0 5px gray;
  display: inline-block;
}
</style>
