<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useAuthStore } from '@/stores/auth';
import { useUserSettingsStore } from '@/stores/userSettings';
import { OnyxButton, OnyxLink, OnyxPageLayout, OnyxSidebar } from 'sit-onyx';
import { useLink } from 'vue-router';

const { isAuthenticated, isAdmin, logout } = useAuthStore();
const userSettingsStore = useUserSettingsStore();

const handleLogout = () => {
  logout().then(() => {
    window.location.reload();
  });
};

const userSettingsHref = useLink({ to: { name: 'UserSettings' } }).href;
</script>

<template>
  <OnyxPageLayout no-padding>
    <template #sidebarRight>
      <OnyxSidebar label="Example sidebar" alignment="right">
        <ShoppingCart></ShoppingCart>
        <div class="sidebar-cta">
          <OnyxLink href="/checkout">Go to Checkout</OnyxLink>
          <OnyxLink v-if="!isAuthenticated" href="/login"> Login </OnyxLink>
          <OnyxButton
            v-if="isAuthenticated"
            label="Logout"
            @click="handleLogout"
          />
        </div>
      </OnyxSidebar>
    </template>

    <ProductList></ProductList>

    <nav class="top-bar-links">
      <OnyxLink href="/admin"
        >{{ isAdmin ? '🔓' : '🔒' }} Admin Dashboard
      </OnyxLink>
      <!-- Add link for user settings here -->
      <OnyxLink :href="userSettingsHref"
        >Go to User Settings ({{ userSettingsStore.username }})</OnyxLink
      >
    </nav>
  </OnyxPageLayout>
</template>

<style scoped lang="scss">
.sidebar-cta {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.top-bar-links {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 1.5rem;
}
</style>
