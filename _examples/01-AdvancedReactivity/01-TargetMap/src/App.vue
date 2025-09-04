<script setup lang="ts">
import { ref } from 'vue';

const currentNewSkill = ref('');

/**
 * animal: Ref<{
 *   value: Proxy<{
 *     species: 'cat',
 *     name: 'lion',
 *     skills: ['bite', 'scratch']
 *   }>
 * }>
 */
const animal = ref({
  species: 'cat',
  name: 'lion',
  skills: ['bite', 'scratch'],
});

console.debug('🦁 animal', animal);
console.debug('🦁 animal.value', animal.value);
console.debug('🦁 animal.value.name', animal.value.name);

const updateSkill = (event: InputEvent) => {
  currentNewSkill.value = (event.target as HTMLInputElement).value;
};

const addSkill = () => {
  animal.value.skills = [...animal.value.skills, currentNewSkill.value];
  currentNewSkill.value = '';
};
</script>

<template>
  {{ animal.species }}

  <h2>
    <pre>{{ animal.name }}</pre>
  </h2>

  <ul>
    <li v-for="skill of animal.skills" :key="skill">
      {{ skill }}
    </li>
  </ul>

  <form>
    <input :value="currentNewSkill" @change="updateSkill" />
    <button type="submit" @click.prevent="addSkill">Add Skill</button>
  </form>
</template>
