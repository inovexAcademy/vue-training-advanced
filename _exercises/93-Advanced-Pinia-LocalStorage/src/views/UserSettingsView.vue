<script setup lang="ts">
import {
  OnyxCard,
  OnyxHeadline,
  OnyxLink,
  OnyxSelect,
  OnyxPageLayout,
} from 'sit-onyx';
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="user-settings-dashboard">
      <OnyxHeadline is="h1" class="title">
        <OnyxLink href="/" class="home-link">{{ '<' }} Home</OnyxLink>
        User Settings
      </OnyxHeadline>

      <!-- <div v-if="storeTBD.userName">
        <p><strong>Username:</strong> {{ storeTBD.userName }}</p>
      </div>
      <OnyxSelect
        v-model="storeTBD.theme"
        label="Theme"
        list-label="List label"
        :options="themeOptionsTBD"
        placeholder="Placeholder..."
      /> -->
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
