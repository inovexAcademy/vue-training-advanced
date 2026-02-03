<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, useThemeTransition } from 'sit-onyx';
import { watchEffect } from 'vue';
import ExerciseBanner from '../../../shared/ExerciseBanner.vue';
import { useUserSettingsStore } from './stores/userSettings';

const userSettingsStore = useUserSettingsStore();
const { store: colorScheme } = useColorMode({ disableTransition: false });

useThemeTransition(colorScheme);

watchEffect(() => {
  colorScheme.value = userSettingsStore.theme;
});
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <ExerciseBanner number="6" title="Prove Yourself" />

    <RouterView />
  </OnyxAppLayout>
</template>
