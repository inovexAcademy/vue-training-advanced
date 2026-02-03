<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useAuthStore } from '@/stores/auth';
import { OnyxLink, OnyxPageLayout, OnyxSidebar } from 'sit-onyx';

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
          <!-- Add a link to the login page here. If the user is authenticated, a button to logout shoud be here instead. -->
        </div>
      </OnyxSidebar>
    </template>

    <ProductList></ProductList>

    <OnyxLink href="/admin" class="admin-link"
      >{{ isAdmin ? '🔓' : '🔒' }} Admin Dashboard
    </OnyxLink>
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

.admin-link {
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>
