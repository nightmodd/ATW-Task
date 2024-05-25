<template>
  <nav>
    <HamburgerButton @toggle-menu="handleToggleMenu" :isActive="isActive" />
    <img src="@/assets/images/logo.png" alt="logo" />
  </nav>
  <ul
    :class="{
      'drop-down': true,
      active: isActive,
    }"
  >
    <li>
      <a href="#home" @click="handleToggleMenu">Home</a>
    </li>
    <li>
      <a href="#about" @click="handleToggleMenu">About</a>
    </li>
    <li>
      <a href="#blog" @click="handleToggleMenu">Blog</a>
    </li>
    <li>
      <a href="#cart" @click="handleToggleMenu">Cart</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const isActive = ref(false);

const handleToggleMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
nav,
.drop-down {
  display: none;
}
@media only screen and (max-width: 56.25rem) {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }
  .drop-down {
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    top: 5.5rem;
    left: 0;
    width: 100%;
    height: fit-content;
    height: -moz-fit-content;
    background: rgba(0, 0, 0, 0.6);
    gap: 1rem;
    transform: translateY(-200%);
    transition: all 0.3s ease-in-out;
    font-size: 1.25rem;
    z-index: 90;
    &.active {
      transform: translateY(0);
    }
  }
}
</style>
