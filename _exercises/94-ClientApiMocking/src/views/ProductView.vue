<script lang="ts" setup>
import { AiSummary } from '@/mocks/ai-summary.mock';
import { fetchProducts } from '@/shared/products';
import { useAiStore } from '@/stores/aiStore';
import { Product } from '@/types/common';
import { iconFeedback } from '@sit-onyx/icons';
import {
  OnyxPageLayout,
  OnyxHeadline,
  OnyxInfoCard,
  OnyxCard,
  OnyxLink,
} from 'sit-onyx';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const productId = Number(route.params.productId);

const product = ref<Product | undefined>(undefined);

onMounted(async () => {
  product.value = await getProductForId(productId);

  if (!product.value) {
    router.replace('/product-not-found');
  }
});

const getProductForId = async (id: number) => {
  const products = await fetchProducts();
  return products?.find(p => p.id === id);
};
</script>

<template>
  <OnyxPageLayout v-if="product">
    <OnyxCard>
      <OnyxLink href="/">Go back to products</OnyxLink>
      <OnyxHeadline is="h1" class="title">
        Product {{ $route.params.productId }}
      </OnyxHeadline>
      <p>{{ product.description }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>Availability: {{ product.availabilityStatus }}</p>
      <p>Price: {{ product.price }} $</p>
    </OnyxCard>

    <OnyxCard>
      <OnyxHeadline is="h2" class="subtitle">🗣️ Reviews</OnyxHeadline>

      <!-- 👉 Add AI summary here -->
      <!-- <OnyxInfoCard
        headline="AI Review Summary"
        style="width: 30rem"
        :icon="iconFeedback"
      >
      </OnyxInfoCard> -->

      <!-- 👉 Add reviews as list here -->
      <!-- ul ... -->
    </OnyxCard>
  </OnyxPageLayout>
</template>
