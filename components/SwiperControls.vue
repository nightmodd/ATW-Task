<template>
  <button v-if="!isEnd" class="swiper-next-button" @click="$emit('slideNext')">
    <img src="/public/images/whiteArrow.svg" alt="arrow" />
  </button>
  <button
    v-if="!isBeginning"
    class="swiper-prev-button"
    @click="$emit('slidePrev')"
  >
    <img src="/public/images/whiteArrow.svg" alt="arrow" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isBeginning: boolean;
  isEnd: boolean;
}>();

defineEmits(["slideNext", "slidePrev"]);
</script>

<style scoped lang="scss"></style>
