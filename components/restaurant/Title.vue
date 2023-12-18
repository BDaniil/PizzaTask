<template>
  <div class="section-heading">
    <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
    <div class="card-info">
      <div class="rating">{{ restaurant.stars }}</div>
      <div class="price">От {{ restaurant.price }} ₽</div>
      <div class="category">{{ restaurant.kitchen }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Restaurant {
  name: string;
  kitchen: string;
  stars: number;
  price: string;
}
defineProps({
  restaurant: {
    type: Object as () => Restaurant,
    required: true,
  },
});
</script>
