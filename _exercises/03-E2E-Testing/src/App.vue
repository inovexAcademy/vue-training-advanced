<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, OnyxToastMessage, useThemeTransition } from 'sit-onyx';

const { store: colorScheme } = useColorMode({ disableTransition: false });
useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <OnyxToastMessage
      headline="Exercise 03: E2E-Testing"
      :duration="0"
      color="warning"
      style="width: 100%"
    />
    <RouterView />
  </OnyxAppLayout>
</template>
