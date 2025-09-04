<script lang="ts" setup>
import { ref, computed, shallowRef } from 'vue';

const list = ref([
  { id: 1, name: 'Item 1', price: 30 },
  { id: 2, name: 'Item 2', price: 10 },
  { id: 3, name: 'Item 3', price: 20 },
]);

const sortedList = computed(() => {
  console.log('asc', list.value); // Log the current list
  return [...list.value].sort((a, b) => a.price - b.price);
});

setTimeout(() => {
  list.value.push({ id: 4, name: 'Item 4', price: 25 });
}, 1000);

// const sortedListDesc = computed(() => {
//   console.log('desc', list.value); // Log the current list
//   return list.value.sort((a, b) => b.price - a.price);
// });

// const sortedList2 = computed(() => {
//   console.log('...destructure', list.value); // Log the current list
//   return [...list.value].sort((a, b) => b.price - a.price);
// });
</script>

<template>
  <h2>Sorted Item List</h2>
  <ul>
    <li v-for="item in sortedList" :key="item.id">
      {{ item.name }} - {{ item.price }} $
    </li>
  </ul>

  <!-- <h2>Sorted Item List Desc</h2>
  <ul>
    <li v-for="item in sortedListDesc" :key="item.id">
      {{ item.name }} - {{ item.price }} $
    </li>
  </ul> -->
</template>
