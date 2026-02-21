<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { OnyxHeadline, OnyxSelect, SelectOption } from 'sit-onyx';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const shoppingCartStore = useShoppingCartStore();
const productsStore = useProductsStore();

const pageSizeOptions: SelectOption<number>[] = [
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
] as const;
const defaultPageSize = pageSizeOptions[0]!.value; // exception as we know for sure that the index=0 exists
const pageSize = ref(defaultPageSize);

watch(
  pageSize,
  async newPageSize => {
    productsStore.loadProducts(newPageSize);
  },
  { immediate: true },
);

// watchEffect(async () => {
//   products.value = await fetchProducts(pageSize.value);
// });
//
// ^-- Also a valid solution

// onMounted(async () => {
//   products.value = await fetchProducts(pageSize.value);
// });
//
// watch(
//   pageSize,
//   async newPageSize => {
//     products.value = await fetchProducts(newPageSize);
//   },
// );
//
// ^-- Also a valid solution

const handleAddToCart = (productId: number) => {
  const productToAdd = productsStore.getProductById(productId);

  if (!productToAdd) return;

  shoppingCartStore.addToCart(productToAdd);
};

const openProductDetails = (productId: number) => {
  router.push(`/product/${productId}`);
};
</script>

<template>
  <div class="root">
    <OnyxHeadline is="h1" class="title">Available Products </OnyxHeadline>
    <ul
      v-if="productsStore.validProducts?.length > 0"
      data-testid="product-list"
    >
      <li
        v-for="product in productsStore.products"
        :key="product.id"
        data-testid="product-item"
      >
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
    padding: 0;
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
