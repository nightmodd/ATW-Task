<template>
  <button
    :class="{
      customButton: true,
      activeButton: activeButton,
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  activeButton?: boolean;
}>();

defineEmits(["click"]);
</script>

<style scoped lang="scss">
.customButton {
  padding: 1rem 1.5rem;
  min-width: 150px;
  font-size: 1.6rem;
  color: #fff;
  background: #816797;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.activeButton {
  @extend .customButton;
  background: #52057b;
}
</style>
