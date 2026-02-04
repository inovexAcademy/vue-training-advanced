<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { countStoreClassSingleton } from '@/store/countStoreAsClass';
import { useCountStore } from '@/store/countStoreAsComposable';
import { useCountStorePinia } from '@/store/countStoreWithPinia';
import { useTemplateRef } from 'vue';
import countStore from '../store/countStoreAsModule';

const compB = useTemplateRef('compB');
const mouse = useMouse(compB);

const composableCountStore = useCountStore();
const piniaCountStore = useCountStorePinia();

// countStore.count.value = 19;
// composableCountStore.count.value = 19;
// countStoreClassSingleton.count.value = 15;
// piniaCountStore.count = 19;

// countStore.doubleCount.value = 999;
// composableCountStore.doubleCount.value = 888;
// countStoreClassSingleton.doubleCount.value = 777;
// piniaCountStore.doubleCount = 666;

// with class, we can add readonly to properties, but we can still overwrite methods...
// countStoreClassSingleton.increment = () => {
//   countStoreClassSingleton.count += 5;
// };

// pinia can also be overwritten...
// piniaCountStore.increment = () => {
//   piniaCountStore.count += 90;
// };
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
      <h3>Class Store</h3>
      <button @click="countStoreClassSingleton.decrement">
        Decrease Count
      </button>
      <br />
      doubleCount: {{ countStoreClassSingleton.doubleCount }}
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
