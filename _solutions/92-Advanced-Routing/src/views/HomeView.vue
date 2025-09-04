<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useAuthStore } from '@/stores/auth';
import { OnyxButton, OnyxLink, OnyxPageLayout, OnyxSidebar } from 'sit-onyx';

const { isAuthenticated, isAdmin, logout } = useAuthStore();

const handleLogout = () => {
  logout().then(() => {
    window.location.reload();
  });
};
</script>

<template>
  <OnyxPageLayout no-padding>
    <template #sidebar>
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
