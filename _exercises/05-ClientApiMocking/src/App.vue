<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { OnyxAppLayout, OnyxToastMessage, useThemeTransition } from 'sit-onyx';

const { store: colorScheme } = useColorMode({ disableTransition: false });
useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <OnyxToastMessage
      headline="Exercise 05: Api Client and Mocking"
      :duration="0"
      color="warning"
      style="width: 100%"
    />
    <RouterView />
  </OnyxAppLayout>
</template>
