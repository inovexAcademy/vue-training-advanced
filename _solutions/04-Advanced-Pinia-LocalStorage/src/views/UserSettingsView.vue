<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings';
import {
  OnyxCard,
  OnyxHeadline,
  OnyxLink,
  OnyxPageLayout,
  OnyxSelect,
} from 'sit-onyx';

const userSettingsStore = useUserSettingsStore();

const handleUsernameChange = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  const newUsername = target.value;
  userSettingsStore.setUsername(newUsername);
};
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="user-settings-dashboard">
      <OnyxHeadline is="h1" class="title">
        <OnyxLink href="/" class="home-link">{{ '<' }} Home</OnyxLink>
        User Settings
      </OnyxHeadline>

      <div>
        <p><strong>Username:</strong> {{ userSettingsStore.username }}</p>
        <input
          :value="userSettingsStore.username"
          type="text"
          placeholder="Change username..."
          @input="event => handleUsernameChange(event)"
        />
      </div>
      <OnyxSelect
        v-model="userSettingsStore.theme"
        label="Theme"
        list-label="List label"
        :options="[
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
        ]"
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
