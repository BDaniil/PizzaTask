<template>
  <Menu v-slot="{ open }" as="div" class="relative mr-4">
    <MenuButton class="user-button" :class="{ active: open }" title="Cart">
      <ShoppingCartIcon class="user-icon" aria-hidden="true" />
      <span v-if="cartItems.length > 0"> ({{ cartItems.length }}) </span>
    </MenuButton>
    <transition v-bind="transitionPopoverAppear">
      <MenuItems class="user-popup">
        <MenuItem v-for="item in cartItems" :key="item.id" class="user-item flex flex-col p-4" as="div">
          <NuxtImg :src="item.image" :alt="item.image" class="rounded" />
          <span class="food-name py-2">{{ item.name }}</span>
          <div class="flex items-center justify-between">
            <strong class="text-xl">{{ item.price * item.quantity }} ₽</strong>
            <div class="food-counter">
              <CommonButton class="w-9" @click.stop="removeFromCart(item.id)">-</CommonButton>
              <span class="counter"> {{ item.quantity }}</span>
              <CommonButton class="w-9" @click.stop="addToCart(item.id)">+</CommonButton>
            </div>
          </div>
        </MenuItem>
        <MenuItem v-if="cartItems.length === 0" as="div" class="p-4">Корзина пуста</MenuItem>
        <MenuItem v-else v-slot="{ active }" as="div" class="p-4 pt-0">
          <CommonButton :class="{ active: active }" class="w-full" @click.stop="clearCart">
            Очистить корзину
          </CommonButton>
          <div class="flex pt-4">
            <strong class="text-xl">Всего: {{ totalPrice }}</strong>
            <CommonButton :class="{ active: active }" class="w-full" @click.stop="clearCart">
              Оформить заказ
            </CommonButton>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts" setup>
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useCartStore } from "../../store/cart";

const { addToCart, removeFromCart, clearCart } = useCartStore();
const { cartItems } = storeToRefs(useCartStore());

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity * item.price, 0);
});
</script>

<style scoped lang="scss">
.user-button {
  @apply flex h-8 items-center gap-2 rounded bg-white px-2 py-1.5 shadow-md shadow-indigo-800/5 ring-1 transition-shadow hover:shadow-xl hover:shadow-indigo-800/5 hover:ring-gray-300 sm:h-10 sm:gap-2.5 sm:px-3 sm:py-2;
  &.active,
  &:hover {
    @apply shadow-md shadow-indigo-800/5 ring-1 ring-gray-300;
  }
  .user-icon {
    @apply h-full w-auto;
  }
}
.user-popup {
  @apply absolute left-full isolate mt-2 flex w-64 -translate-x-full flex-col overflow-hidden rounded bg-white p-1 shadow-md;
}
</style>
