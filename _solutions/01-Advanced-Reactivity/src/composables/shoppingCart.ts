import { Product, ShoppingCartItem } from '@/types/common';
import { computed, ref } from 'vue';

let _instance: ReturnType<typeof _useShoppingCart>;

/*
 * This enforces the Singleton pattern so that useShoppingCart could theoretically replace the Pinia store.
 * ⚠️ Mind the caveats, though: https://pinia.vuejs.org/introduction.html#Why-should-I-use-Pinia-
 */
export const useShoppingCart = () => {
  if (!_instance) _instance = _useShoppingCart();

  return _instance;
};

const _useShoppingCart = () => {
  const cartItems = ref<ShoppingCartItem[]>([]);

const totalPrice = computed(() => {
    return cartItems.value
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(2);
  });

  function addToCart(newCartItem: Product) {
    const isInCart = cartItems.value.some(
      item => item.product.id === newCartItem.id,
    );

    if (isInCart) {
      cartItems.value = cartItems.value.map(item => {
        if (item.product.id !== newCartItem.id) return item;

        return { ...item, quantity: item.quantity + 1 };
      });
      return;
    }

    cartItems.value = [
      ...cartItems.value,
      { product: newCartItem, quantity: 1 },
    ];
  }

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value
      .map(item => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter(item => item.quantity > 0);
  }

  return {
    cartItems: computed(() => cartItems.value),
    totalPrice,
    addToCart,
    removeFromCart,
  };
};
