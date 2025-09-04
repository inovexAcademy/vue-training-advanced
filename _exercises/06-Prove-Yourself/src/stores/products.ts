import { getAllProducts, Product } from '@/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[] | undefined>(undefined);

  // load = fetch + set
  const loadProducts = async (
    count = 5,
  ): Promise<{ products: Product[]; error?: string }> => {
    const { data, error } = await getAllProducts({ query: { limit: count } });
    if (error) {
      // better think of concept for showing errors to users
      console.error('Error loading products:', error);
    } else {
      products.value = data.products;
    }
    return { products: data.products, error: error?.message };
  };

  const getProductById = async (
    id: number,
  ): Promise<{ product: Product | undefined; error?: string }> => {
    // check whether product is already loaded
    if (products.value?.find(p => p.id === id)) {
      return { product: products.value.find(p => p.id === id) };
    }

    const { data, error } = await getAllProducts(); // should be getProductById

    if (error) {
      // better think of concept for showing errors to users
      console.error('Error loading product by ID:', error);
    }

    return {
      product: data.products?.find(p => p.id === id),
      error: error?.message,
    };
  };

  return {
    // state,
    products,
    // actions
    loadProducts,
    getProductById,
  };
});
