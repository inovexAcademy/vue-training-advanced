<template>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #369e7a;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
