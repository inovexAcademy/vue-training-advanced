import { Product as ApiProduct } from '@/api';

export type ShoppingCartItem = {
  product: ApiProduct;
  quantity: number;
};
