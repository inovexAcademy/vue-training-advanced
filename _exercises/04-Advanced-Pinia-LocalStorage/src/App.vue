<script lang="ts" setup>
  import { useColorMode } from '@vueuse/core';
  import { OnyxAppLayout, useThemeTransition } from 'sit-onyx';
  import ExerciseBanner from '../../../shared/ExerciseBanner.vue';

  // The colorScheme is either 'light' or 'dark', it changes the theme of the app when updated
  const { store: colorScheme } = useColorMode({ disableTransition: false });

  // this is optional, it makes the theme transition smoother, but you can also just set the color scheme without it
  useThemeTransition(colorScheme);
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <ExerciseBanner number="4" title="Advanced Pinia" />

    <RouterView />
  </OnyxAppLayout>
</template>
