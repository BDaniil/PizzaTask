<template>
  <div class="default-layout">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  --header-height: 6.9rem;
  @media (min-width: 640px) {
    --header-height: 5rem;
  }
}
</style>
