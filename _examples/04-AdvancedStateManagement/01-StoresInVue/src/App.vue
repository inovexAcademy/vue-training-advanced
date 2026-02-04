<script setup lang="ts">
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

import { countStoreClassSingleton } from './store/countStoreAsClass';
import { useCountStore } from './store/countStoreAsComposable';
import countStore from './store/countStoreAsModule';
import { useCountStorePinia } from './store/countStoreWithPinia';

const composableCountStore = useCountStore();
const piniaCountStore = useCountStorePinia();
</script>

<template>
  <ComponentA />
  <pre>
  Module Store: {{ countStore.count }}
  Composable Store: {{ composableCountStore.count }}
  Class Store: {{ countStoreClassSingleton.count }}
  Pinia Store: {{ piniaCountStore.count }}
  </pre>
  <br />

  <ComponentB />
</template>
