<template>
  <footer class="footer">
    <div class="footer-block container">
      <CommonLogo />
      <nav class="footer-nav">
        <NuxtLink v-for="item in navigation.links" :key="item.name" :href="item.href" class="footer-link"
          >{{ item.text }}
        </NuxtLink>
      </nav>
      <div class="social-links">
        <NuxtLink v-for="item in navigation.social" :key="item.name" :href="item.href" class="social-link"
          ><NuxtImg :src="item.src" :alt="item.name" class="socials-logo" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navigation = computed(() => {
  return {
    links: [
      {
        text: "Ресторанам",
        href: "#",
      },
      {
        text: "Курьерам",
        href: "#",
      },
      {
        text: "Пресс-центр",
        href: "#",
      },
      {
        text: "Контакты",
        href: "#",
      },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        src: "/icon/social/fb.svg",
      },
      {
        name: "Instagram",
        href: "#",
        src: "/icon/social/instagram.svg",
      },
      {
        name: "Vk",
        href: "#",
        src: "/icon/social/vk.svg",
      },
    ],
  };
});
</script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
}

.footer-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-nav {
  margin-left: 35px;
  margin-right: auto;
}

.footer-link {
  display: inline-block;
  color: #595959;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  text-decoration: none;
}

.footer-link:not(:last-child) {
  margin-right: 15px;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-link:not(:last-child) {
  margin-right: 21px;
}

.socials-logo {
  @apply h-6 w-6;
}

.main-logo {
  @apply h-8 w-24;
}
</style>
