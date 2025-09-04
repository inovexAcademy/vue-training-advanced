<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, OnyxToast, useThemeTransition } from 'sit-onyx';
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
    <RouterView />
    <OnyxToast />
  </OnyxAppLayout>
</template>
