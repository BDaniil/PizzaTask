<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <MenuButton class="user-button" :class="{ active: open }" title="Account">
      <UserCircleIcon class="user-icon" aria-hidden="true" />
    </MenuButton>
    <transition v-bind="transitionPopoverAppear">
      <MenuItems v-if="user" class="user-popup">
        <UserAvatar class="user-avatar" />
        <div class="user-name">{{ user.name }}</div>
        <MenuItem v-slot="{ active }">
          <button class="popup-menu-item" :class="{ active: active }">
            <Cog6ToothIcon class="menu-item-icon" aria-hidden="true" />
            Настройки аккаунта
          </button>
        </MenuItem>
        <div class="mx-auto my-2 w-2/3 border-b"></div>
        <MenuItem v-slot="{ active }">
          <button class="popup-menu-item" :class="{ active: active }">
            <LifebuoyIcon class="menu-item-icon" aria-hidden="true" />
            Помощь
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button class="popup-menu-item" :class="{ active: active }" @click="logout">
            <ArrowLeftOnRectangleIcon class="menu-item-icon" aria-hidden="true" />
            Выйти
          </button>
        </MenuItem>
      </MenuItems>
      <MenuItems v-else class="user-popup logged-out">
        <CommonLogo class="mx-auto my-4 h-8 w-auto" />
        <MenuItem v-slot="{ active }">
          <button class="popup-menu-item" :class="{ active: active }" @click="openAuthModal">
            <UserIcon class="menu-item-icon" aria-hidden="true" />
            Войти в аккаунт
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button class="popup-menu-item" :class="{ active: active }" @click="openAuthModal">
            <UserPlusIcon class="menu-item-icon scale-105" aria-hidden="true" />
            Создать аккаунт
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts" setup>
import {
  UserCircleIcon,
  UserIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useUserStore, testUser } from "../../store/user";

const { logout } = useUserStore();
const { user, authModalOpened } = storeToRefs(useUserStore());

user.value = testUser;

const openAuthModal = () => {
  authModalOpened.value = true;
};
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

  .user-avatar {
    @apply mx-auto mt-4 h-20 w-20 rounded-full bg-white shadow-lg shadow-black/20;
  }
  .user-name {
    @apply mb-4 mt-2 text-center text-xl font-semibold;
  }

  .popup-menu-item {
    @apply flex items-center whitespace-nowrap rounded px-5 py-3 text-left text-sm text-gray-400;
    &.active:hover {
      @apply bg-gray-50;
    }
    &.active:not(:hover) {
      @apply ring-1 ring-indigo-500;
    }

    .menu-item-icon {
      @apply mr-2 h-4 w-4;
    }
  }
}
</style>
