<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { getProducts } from '@/shared/products';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { Product } from '@/types/common';
import { OnyxHeadline, OnyxSelect } from 'sit-onyx';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const shoppingCartStore = useShoppingCartStore();
const router = useRouter();

const products = ref<Product[]>(getProducts());
//                              ^-- Should use async fetchProducts instead!
const pageSizeOptions: { value: number; label: string }[] = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 25,
    label: '25',
  },
];
const defaultPageSize = pageSizeOptions[0]!.value;
const pageSize = ref<number>(defaultPageSize);

const handleAddToCart = (productId: number) => {
  const productToAdd = products.value?.find(
    product => product.id === productId,
  );

  if (!productToAdd) return;

  shoppingCartStore.addToCart(productToAdd);
};

const openProductDetails = (productId: number) => {
  router.push(`/product/${productId}`);
};
</script>

<template>
  <div class="root">
    <OnyxHeadline is="h1" class="title">Available Products</OnyxHeadline>
    <ul v-if="(products?.length || 0) > 0" data-testid="product-list">
      <li v-for="product in products" :key="product.id">
        <ProductCard
          :id="product.id"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          @product-click="openProductDetails(product.id)"
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
    </ul>
    <p v-else>No products available...</p>
    <OnyxSelect
      v-model="pageSize"
      class="page-size-select"
      label="Select Page Size"
      list-label="Select Page Size"
      :options="pageSizeOptions"
      placeholder="Page size"
    />
    <!-- ^-- Selecting a new page size should update the products -->
  </div>
</template>

<style scoped lang="css">
.root {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;

  .title {
    padding: 64px 32px 16px 32px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    max-height: 85dvh;
    overflow: auto;
    margin-bottom: 16px;
    padding: 0 32px;

    li {
      list-style: none;
    }
  }

  .page-size-select {
    width: 300px;
    margin: 16px 32px 32px auto;
  }
}
</style>
