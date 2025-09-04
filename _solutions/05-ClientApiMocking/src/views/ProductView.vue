<script lang="ts" setup>
import { Product } from '@/api';
import { AiSummary } from '@/mocks/ai-summary.mock';
import { useAiStore } from '@/stores/aiStore';
import { useProductStore } from '@/stores/products';
import { iconFeedback } from '@sit-onyx/icons';
import {
  OnyxPageLayout,
  OnyxHeadline,
  OnyxInfoCard,
  OnyxCard,
  OnyxLink,
} from 'sit-onyx';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Stores
const router = useRouter();
const route = useRoute();
const aiStore = useAiStore();
const productStore = useProductStore();

// Constants
const productId = Number(route.params.productId);

// State (refs)
const product = ref<Product | undefined>(undefined);
const reviewSummaryAi = ref<AiSummary | null>(null);

// Lifecycle Hooks
onBeforeMount(async () => {
  const { product: apiProduct, error: productsError } =
    await productStore.getProductById(productId);
  product.value = apiProduct;

  if (productsError) {
    // better: show error in toast
    console.error('Error loading product:', productsError);
  }

  if (!product.value) {
    router.replace('/product-not-found');
  }

  const { summary: apiSummary, error: aiSummaryError } =
    await aiStore.getAiSummaryById(productId);
  reviewSummaryAi.value = apiSummary;
  if (aiSummaryError) {
    // better: show error in toast
    console.error('Error loading AI review summary');
  }
});
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

      <OnyxInfoCard
        v-if="reviewSummaryAi"
        headline="AI Review Summary"
        style="width: 30rem"
        :icon="iconFeedback"
      >
        <div>Average Rating: {{ reviewSummaryAi.avgRating }}</div>
        {{ reviewSummaryAi.summary }}
        <p>ℹ️ This summary was created using AI (Artificial Intelligence)</p>
      </OnyxInfoCard>

      <ul>
        <li v-for="review in product.reviews" :key="review.date">
          <p>
            <strong>{{ review.reviewerName }}</strong> ({{
              review.reviewerEmail
            }})
          </p>
          <p>
            Rating: <span v-for="(_, i) of review.rating" :key="i">⭐</span>
          </p>
          <p>{{ review.comment }}</p>
        </li>
      </ul>
    </OnyxCard>
  </OnyxPageLayout>
</template>
