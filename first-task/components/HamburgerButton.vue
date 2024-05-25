<template>
  <button class="menu-btn" @click="ToggleMenu">
    <div
      :class="{
        hamburger: true,
        'is-active': isActive,
      }"
      id="hamburger"
    >
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div
      :class="{
        'menu-span': true,
        'active-span': isActive,
      }"
    >
      <span :class="{ active: isActive }">CLOSE</span>
      <span :class="{ active: !isActive }">MENU</span>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>();
const emit = defineEmits(["toggle-menu"]);

const ToggleMenu = () => {
  emit("toggle-menu");
};
</script>

<style scoped lang="scss">
.menu-btn {
  background: none;
  border: none;
  color: #fff;
  display: flex;
  gap: 12px;
  width: 108px;
  height: 28px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
}

.line {
  display: block;
  width: 35px;
  height: 1px;
  background-color: #fff;
  margin: 7px auto;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger.is-active .line:nth-child(1) {
  -webkit-transform: translateX(-80%);
  -ms-transform: translateX(-80%);
  -o-transform: translateX(-80%);
  transform: translateX(-80%);
}

.menu-span {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  span {
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

.menu-span span.active {
  opacity: 1;
}

@media (max-width: 31.25rem) {
  .hamburger .line {
    width: 24px;
  }
}
</style>
