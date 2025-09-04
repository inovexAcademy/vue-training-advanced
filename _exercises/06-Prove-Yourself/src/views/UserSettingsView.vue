<script setup lang="ts">
import { Theme, useUserSettingsStore } from '@/stores/userSettings';
import {
  OnyxCard,
  OnyxHeadline,
  OnyxLink,
  OnyxSelect,
  OnyxPageLayout,
} from 'sit-onyx';

const userStore = useUserSettingsStore();

const themeOptions: Array<{ value: Theme; label: string }> = [
  { value: 'light', label: 'Light Theme' },
  { value: 'dark', label: 'Dark Theme' },
];
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="user-settings-dashboard">
      <OnyxHeadline is="h1" class="title">
        <OnyxLink href="/" class="home-link">{{ '<' }} Home</OnyxLink>
        User Settings
      </OnyxHeadline>

      <div v-if="userStore.userName">
        <p><strong>Username:</strong> {{ userStore.userName }}</p>
      </div>
      <OnyxSelect
        v-model="userStore.theme"
        label="Theme"
        list-label="List label"
        :options="themeOptions"
        placeholder="Placeholder..."
      />
    </OnyxCard>
  </OnyxPageLayout>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.home-link {
  font-size: 1rem;
  font-weight: normal;
}

.user-settings-dashboard {
  max-width: 400px;
  margin: 0 auto;
}
</style>
