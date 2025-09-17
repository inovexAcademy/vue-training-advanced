<template>
  <div class="card">
    <img
      :src="`/lamas/lama-${id}.jpeg`"
      :alt="`Image of ${name}`"
      class="card-image"
    />
    <div class="card-content">
      <h2 class="card-title">{{ name }}</h2>
      <p class="card-description">{{ description }}</p>
      <ButtonComponent @click="startChat"> Start Chatting! </ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
}>();

const { push } = useRouter();

const startChat = () => {
  push(`/lama/${props.id}`);
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: scale(1.01);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1em;
  text-align: center;
}

.card-title {
  margin: 0.5em 0;
  font-size: 1.5em;
  color: #333;
  text-decoration: none !important;
}
</style>
