<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useAuthStore } from '@/stores/auth';
import { iconUser } from '@sit-onyx/icons';
import {
  OnyxButton,
  OnyxIcon,
  OnyxLink,
  OnyxPageLayout,
  OnyxSidebar,
} from 'sit-onyx';

const { isAuthenticated, isAdmin, logout } = useAuthStore();

const handleLogout = () => {
  logout().then(() => {
    window.location.reload();
  });
};
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
      <OnyxLink href="/admin" class="link"
        >{{ isAdmin ? '🔓' : '🔒' }} Admin Dashboard
      </OnyxLink>
      <OnyxLink href="/user-settings" class="link">
        <OnyxIcon :icon="iconUser" size="24px" /> User Settings
      </OnyxLink>
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
