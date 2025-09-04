<script setup lang="ts">
import { OnyxButton, OnyxCard, OnyxPageLayout, OnyxLink } from 'sit-onyx';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';

const { login } = useAuthStore();
const router = useRouter();
const route = useRoute();

const handleLogin = async (admin?: boolean) => {
  login(admin).then(() => {
    const redirectUrl = route.query.redirectUrl;
    if (typeof redirectUrl === 'string') {
      router.push(redirectUrl);
    } else if (
      Array.isArray(redirectUrl) &&
      typeof redirectUrl[0] === 'string'
    ) {
      router.push(redirectUrl[0]);
    } else {
      router.push({ name: 'Home' });
    }
  });
};
</script>

<template>
  <OnyxPageLayout>
    <OnyxCard class="login-card">
      <OnyxLink class="home-link" href="/">{{ '<' }} Home</OnyxLink>
      <h1>Login</h1>
      <p>Please login to continue.</p>
      <OnyxButton label="Login" @click="() => handleLogin()" />
      <OnyxButton label="Admin Login" @click="() => handleLogin(true)" />
    </OnyxCard>
  </OnyxPageLayout>
</template>

<style scoped lang="scss">
.login-card {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  gap: 32px;
  padding: 48px;
  align-items: center;
}

.home-link {
  position: absolute;
  top: 16px;
  left: 16px;
}
</style>
