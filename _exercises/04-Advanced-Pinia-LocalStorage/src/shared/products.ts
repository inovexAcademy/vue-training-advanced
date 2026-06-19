import { Product } from '@/types/common';

type ProductsResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export async function fetchProducts(quantity: number = 5): Promise<Product[]> {
  const rawResponse = await fetch(`https://dummyjson.com/products/?limit=${quantity}`);
  const response: ProductsResponse = await rawResponse.json();

  return response.products;
}

const productCategories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'] as const;
const productBrands = ['Brand X', 'Brand Y', 'Brand Z', 'Brand Q', 'Brand N'] as const;
const warrantyOptions = ['6 months warranty', '1 year warranty', '2 years warranty'] as const;
const shippingOptions = [
  'Ships in 1-3 business days',
  'Ships in 3-5 business days',
  'Ships in 5-7 business days',
] as const;
const availabilityStatuses = ['In Stock', 'Limited Stock', 'Backorder'] as const;
const returnPolicies = ['30-day return policy', '14-day return policy', 'No returns accepted'] as const;

function getCycledValue<T>(values: readonly T[], id: number): T {
  return values[(id - 1) % values.length] ?? values[0]!;
}

function createMockProduct(id: number): Product {
  const createdAt = new Date(Date.UTC(2024, 0, id)).toISOString();
  const updatedAt = new Date(Date.UTC(2024, 1, id)).toISOString();
  const barcode = String(1000000000000 + id);
  const category = getCycledValue(productCategories, id);
  const brand = getCycledValue(productBrands, id);

  return {
    id,
    title: `Product ${id}`,
    description: `Description for Product ${id}`,
    category,
    price: Number((14.99 + id * 2.75).toFixed(2)),
    discountPercentage: (id * 3) % 20,
    rating: Number((3.5 + (id % 15) * 0.1).toFixed(1)),
    stock: 25 + id * 4,
    tags: [
      `tag${((id - 1) % 10) + 1}`,
      `tag${((id + 4) % 10) + 1}`,
      category.toLowerCase().replace(' ', '-'),
    ],
    brand,
    sku: `SKU${String(id).padStart(5, '0')}`,
    weight: Number((0.4 + id * 0.05).toFixed(2)),
    dimensions: {
      width: 10 + (id % 6) * 2,
      height: 15 + (id % 5) * 3,
      depth: 4 + (id % 4),
    },
    warrantyInformation: getCycledValue(warrantyOptions, id),
    shippingInformation: getCycledValue(shippingOptions, id),
    availabilityStatus: getCycledValue(availabilityStatuses, id),
    reviews: [],
    returnPolicy: getCycledValue(returnPolicies, id),
    minimumOrderQuantity: (id % 3) + 1,
    meta: {
      createdAt,
      updatedAt,
      barcode,
      qrCode: `https://example.com/qr/${barcode}`,
    },
    thumbnail: `https://via.placeholder.com/300?text=Product+${id}`,
    images: [
      `https://via.placeholder.com/300?text=Product+${id}+Image+1`,
      `https://via.placeholder.com/300?text=Product+${id}+Image+2`,
    ],
  };
}

export function getProducts(): Product[] {
  return Array.from({ length: 50 }, (_, index) => createMockProduct(index + 1));
}
