<script lang="ts" setup>
  import { getAllProducts } from '@/api/sdk.gen';
  import { Product } from '@/api/types.gen';
  import { iconFeedback } from '@sit-onyx/icons';
  import { OnyxCard, OnyxHeadline, OnyxInfoCard, OnyxLink, OnyxPageLayout } from 'sit-onyx';
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
    const products = await getAllProducts({ query: { limit: 100 } }).then(
      (res) => res.data?.products ?? []
    );
    return products?.find((p) => p.id === id);
  };
</script>

<template>
  <OnyxPageLayout v-if="product">
    <OnyxCard>
      <OnyxLink href="/">Go back to products</OnyxLink>
      <OnyxHeadline is="h1" class="title"> Product {{ $route.params.productId }} </OnyxHeadline>
      <p>{{ product.description }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>Availability: {{ product.availabilityStatus }}</p>
      <p>Price: {{ product.price }} $</p>
    </OnyxCard>

    <OnyxCard>
      <OnyxHeadline is="h2" class="subtitle">🗣️ Reviews</OnyxHeadline>

      <!-- 👉 Add AI summary here -->
      <OnyxInfoCard headline="AI Review Summary" style="width: 30rem" :icon="iconFeedback">
        <!-- 👉 Add reviews as list here -->
        <ul>
          <li v-for="review in product.reviews" :key="review.id">
            <p>
              <strong>{{ review.author }}</strong
              >: {{ review.comment }} (Rating: {{ review.rating }}/5)
            </p>
          </li>
        </ul>
      </OnyxInfoCard>
    </OnyxCard>
  </OnyxPageLayout>
</template>
