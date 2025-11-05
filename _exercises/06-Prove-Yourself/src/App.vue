<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, OnyxToastMessage, useThemeTransition } from 'sit-onyx';
import { useUserSettingsStore } from './stores/userSettings';
import { watchEffect } from 'vue';

const userSettingsStore = useUserSettingsStore();
const { store: colorScheme } = useColorMode({ disableTransition: false });

useThemeTransition(colorScheme);

watchEffect(() => {
  colorScheme.value = userSettingsStore.theme;
});
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <OnyxToastMessage
      headline="Exercise 06: Prove Yourself"
      :duration="0"
      color="warning"
      style="width: 100%"
    />
    <RouterView />
  </OnyxAppLayout>
</template>
