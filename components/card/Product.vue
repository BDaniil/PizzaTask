<template>
  <div class="card">
    <NuxtImg :src="image" :alt="name" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ description }}</div>
      </div>
      <div class="card-buttons">
        <CommonButton @click="handleAddToCart(id, name, price, image)">
          <span class="button-card-text">В корзину</span>
          <ShoppingCartIcon class="h-4 w-4" aria-hidden="true" />
        </CommonButton>
        <strong class="card-price-bold">{{ price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

const handleAddToCart = (id: string, name: string, price: number, image: string) => {
  cartStore.addToCart(id, name, price, image);
};

defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
