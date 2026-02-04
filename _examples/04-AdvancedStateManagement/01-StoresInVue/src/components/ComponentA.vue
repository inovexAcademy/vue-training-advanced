<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { countStoreClassSingleton } from '@/store/countStoreAsClass';
import { useCountStore } from '@/store/countStoreAsComposable';
import { useCountStorePinia } from '@/store/countStoreWithPinia';
import { useTemplateRef } from 'vue';
import countStore from '../store/countStoreAsModule';

const compA = useTemplateRef('compA');
const mouse = useMouse(compA);

const composableCountStore = useCountStore();
const piniaCountStore = useCountStorePinia();
</script>

<template>
  <div ref="compA" class="a">
    <h1>Component A</h1>
    <pre>Relative Position: x {{ mouse.x }} y {{ mouse.y }}</pre>

    <div class="card">
      <h3>Module Store</h3>
      <button @click="countStore.increment">Increase Count</button>
      {{ countStore.count }}
    </div>
    <br />

    <div class="card">
      <h3>Composable Store</h3>
      <button @click="composableCountStore.increment">Increase Count</button>
      {{ composableCountStore.count }}
    </div>

    <br />

    <div class="card">
      <h3>Class Store</h3>
      <button @click="countStoreClassSingleton.increment">
        Increase Count
      </button>
      {{ countStoreClassSingleton.count }}
    </div>
    <br />

    <div class="card">
      <h3>Pinia Store</h3>
      <button @click="piniaCountStore.increment">Increase Count</button>
      {{ piniaCountStore.count }}
    </div>
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

.card {
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 0 5px gray;
  display: inline-block;
}
</style>
