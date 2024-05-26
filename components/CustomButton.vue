<template>
  <button
    :class="{
      'custom-button': true,
      'active-button': activeButton,
      'disabled-button': disabled,
    }"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  activeButton?: boolean;
  disabled?: boolean;
}>();

defineEmits(["click"]);
</script>

<style scoped lang="scss">
.custom-button {
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
.active-button {
  @extend .custom-button;
  background: #52057b;
}
.disabled-button {
  @extend .custom-button;
  background: #626262;
  cursor: not-allowed;
}
</style>
