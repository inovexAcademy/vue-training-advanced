<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { OnyxCard, OnyxHeadline, OnyxLink, OnyxPageLayout } from 'sit-onyx';

const { isAdmin } = useAuthStore();
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="admin-dashboard">
      <OnyxHeadline is="h1" class="title">
        <OnyxLink href="/" class="home-link">{{ '<' }} Home</OnyxLink>
        Admin Dashboard
      </OnyxHeadline>
      <p>Welcome to the admin dashboard!</p>
      <p>This site should only be visitable by admins.</p>
      <p>You are {{ isAdmin ? '' : 'not' }} an admin!</p>
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
</style>
