<script setup lang="ts">
  // import { useAuthStore } from '@/stores/auth';
  // import { useRouter } from 'vue-router';
  import { OnyxButton, OnyxCard, OnyxLink, OnyxPageLayout } from 'sit-onyx';

  // const router = useRouter();
  // const { login } = useAuthStore();

  const handleLogin = async (isAdmin?: boolean) => {
    // Use the login function here to login the user.
    // Hint: To log in as admin, pass true as the argument.
    // What should happen after the user logs in?
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
