import { getAllProducts, Product } from '@/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);

  // load = fetch + set
  const loadProducts = async (count = 5): Promise<{ products: Product[]; error?: string }> => {
    const { data, error } = await getAllProducts({ query: { limit: count } });
    const loadedProducts = data?.products ?? [];

    if (error) {
      // better think of concept for showing errors to users
      console.error('Error loading products:', error);
    }

    products.value = loadedProducts;

    return { products: loadedProducts, error: error?.message };
  };

  const getProductById = async (
    id: number
  ): Promise<{ product: Product | undefined; error?: string }> => {
    // check whether product is already loaded
    const cachedProduct = products.value.find((p) => p.id === id);
    if (cachedProduct) {
      return { product: cachedProduct };
    }

    const { data, error } = await getAllProducts(); // should be getProductById

    if (error) {
      // better think of concept for showing errors to users
      console.error('Error loading product by ID:', error);
    }

    return {
      product: data?.products?.find((p) => p.id === id),
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
