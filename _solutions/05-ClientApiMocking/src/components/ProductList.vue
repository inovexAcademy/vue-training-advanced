<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/stores/products';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { useStorage } from '@vueuse/core';
import { OnyxHeadline, OnyxSelect } from 'sit-onyx';
import { watch } from 'vue';

const productStore = useProductStore();
const shoppingCartStore = useShoppingCartStore();
const pageSizeOptions = [
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
const defaultPageSize = pageSizeOptions[0].value;
const pageSize = useStorage('pageSize', defaultPageSize);

watch(
  pageSize,
  async newPageSize => {
    window.localStorage.setItem('pageSize', newPageSize.toString());

    productStore.loadProducts(newPageSize);
  },
  { immediate: true },
);

// watchEffect(async () => {
//   window.localStorage.setItem('pageSize', pageSize.value.toString());
//
//   products.value = await fetchProducts(pageSize.value);
// });
//
// ^-- Also a valid solution

const handleAddToCart = async (productId: number) => {
  const { product, error } = await productStore.getProductById(productId);

  if (error) {
    // better show toast to user
    console.error('Error adding product to cart:', error);
    return;
  }
  if (!product) return;

  shoppingCartStore.addToCart(product);
};
</script>

<template>
  <div class="root">
    <OnyxHeadline is="h1" class="title">Available Products </OnyxHeadline>
    <ul v-if="productStore.products?.length > 0">
      <li v-for="product in productStore.products" :key="product.id">
        <ProductCard
          :id="product.id"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          @add-to-cart="handleAddToCart"
        ></ProductCard>
      </li>
    </ul>
    <p v-else class="no-products-placeholder">No products available...</p>
    <OnyxSelect
      v-model="pageSize"
      class="page-size-select"
      label="Select Page Size"
      list-label="Select Page Size"
      :options="pageSizeOptions"
      placeholder="Page size"
    />
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
    max-height: 85dvh;
    overflow: auto;
    margin-bottom: 16px;
    padding: 0 32px;

    li {
      list-style: none;
    }
  }

  .no-products-placeholder {
    padding: 16px 32px;
  }

  .page-size-select {
    width: 300px;
    margin: 16px 32px 32px auto;
  }
}
</style>
