<template>
  <div class="container">
    <div class="section-heading flex justify-between">
      <div class="flex">
        <h2 class="section-title restaurant-title">{{ restaurantObject?.name }}</h2>
        <div class="card-info">
          <div class="rating">{{ restaurantObject?.stars }}</div>
          <div class="price">От {{ restaurantObject?.price }} ₽</div>
          <div class="category">{{ restaurantObject?.kitchen }}</div>
        </div>
      </div>
      <div>
        <CommonButton class="mr-2" @click="sortByPrice('asc')">Сначала дешевые</CommonButton>
        <CommonButton @click="sortByPrice('desc')">Сначала дорогие</CommonButton>
      </div>
    </div>
    <CardGrid>
      <CardProduct
        v-for="partner in sortedRestaurantData"
        :id="partner.id"
        :key="partner.id"
        :name="partner.name"
        :description="partner.description"
        :price="partner.price"
        :image="partner.image"
      />
    </CardGrid>
  </div>
</template>

<script lang="ts" setup>
import data from "../../db/db.json";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const route = useRoute();
const restaurantData = ref<Restaurant[]>([]);

const restaurantSlug = computed(() => {
  return route.params.restaurant;
});

const restaurantObject = computed(() => {
  return data.db.partners.find((item) => item.products === `${restaurantSlug.value}.json`);
});

const sortedRestaurantData = computed(() => {
  return [...restaurantData.value].sort((a, b) => {
    if (sortOrder.value === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
});

const sortOrder = ref("asc");

const sortByPrice = (order: "asc" | "desc") => {
  sortOrder.value = order;
};

watchEffect(async () => {
  if (restaurantSlug.value) {
    try {
      const module = await import(`../../db/${restaurantSlug.value}.json`);
      restaurantData.value = module.default as Restaurant[];
    } catch (e) {
      console.error("Failed to load restaurant data", e);
    }
  }
});
</script>
