<template>
  <NuxtLink :to="`/restaurant/${slug}`" class="card card-restaurant">
    <NuxtImg :src="image" :alt="name" class="card-image" />
    <div class="p-4">
      <div class="card-heading">
        <h3 class="card-title">{{ name }}</h3>
        <span class="card-tag tag">{{ timeOfDelivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ stars }}</div>
        <div class="price">От {{ price }} ₽</div>
        <div class="category">{{ kitchen }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  timeOfDelivery: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  kitchen: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
</script>
