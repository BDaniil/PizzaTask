<template>
  <div class="container">
    <Promo />
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input v-model="searchQuery" type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
      </label>
    </div>
    <CardGrid>
      <CardRestaurant
        v-for="partner in filteredPartners"
        :key="partner.name"
        :name="partner.name"
        :time-of-delivery="partner.time_of_delivery"
        :stars="partner.stars"
        :price="partner.price"
        :kitchen="partner.kitchen"
        :image="partner.image"
        :slug="partner.products.replace('.json', '')"
      />
    </CardGrid>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import data from "../db/db.json";

const searchQuery = ref("");
const { partners } = data.db;

const filteredPartners = computed(() => {
  if (!searchQuery.value) {
    return partners;
  }
  return partners.filter((partner) => {
    return (
      partner.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      partner.kitchen.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});
</script>
