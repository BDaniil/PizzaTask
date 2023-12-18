<template>
  <NuxtImg v-if="user && user.avatar" :src="user.avatar" :alt="`User avatar of ${user.name}`" :placeholder="2" />
  <UserCircleIcon v-else aria-hidden="true" />
</template>

<script lang="ts" setup>
import { UserCircleIcon } from "@heroicons/vue/24/outline";
import { useUserStore } from "../../store/user";

const { user } = storeToRefs(useUserStore());
</script>
