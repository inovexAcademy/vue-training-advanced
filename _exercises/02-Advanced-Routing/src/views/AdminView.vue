<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import { OnyxCard, OnyxHeadline, OnyxLink, OnyxPageLayout } from 'sit-onyx';

  const { isAdmin } = useAuthStore();
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="admin-dashboard">
      <OnyxLink href="/" class="home-link">{{ '<' }} Home</OnyxLink>
      <OnyxHeadline is="h1" class="title"> Admin Dashboard </OnyxHeadline>
      <p>Welcome to the admin dashboard!</p>
      <p>This site should only be visitable by admins.</p>
      <br />
      <b v-if="isAdmin">You are an admin! ✅</b>
      <b v-else>You are not an admin! ❌</b>
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
