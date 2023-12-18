<template>
  <header class="header container">
    <NuxtLink to="/">
      <CommonLogo />
    </NuxtLink>
    <label class="address">
      <input type="text" class="input input-address" placeholder="Адрес доставки" />
    </label>
    <div class="buttons">
      <HeaderCartButton />
      <HeaderUserButton />
    </div>
  </header>
</template>
