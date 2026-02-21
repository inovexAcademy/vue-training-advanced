import { fetchProducts } from "@/shared/products";
import { Product } from "@/types/common";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductsStore = defineStore('products', () => {
  // state
  const products = ref<Product[]>();
  const oldPageSize = ref<number>();

  // getters
  const validProducts = computed<Product[]>(() => {
    if (products.value === undefined) return []
    return products.value
  })

  // actions
  const loadProducts = async (newPageSize: number) => {
    if (products.value !== undefined && oldPageSize.value === newPageSize) {
      return;
    }
    products.value = await fetchProducts(newPageSize);
    oldPageSize.value = newPageSize;
  }

  const getProductById = (productId: number) => {
    return validProducts.value.find(product => product.id === productId);
  }

  return {products, validProducts, loadProducts, getProductById}
})