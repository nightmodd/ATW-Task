<template>
  <button class="swiper-next-button" @click="$emit('slideNext')" v-if="!isEnd">
    <img src="/public/images/whiteArrow.svg" alt="arrow" />
  </button>
  <button
    class="swiper-prev-button"
    @click="$emit('slidePrev')"
    v-if="!isBeginning"
  >
    <img src="/public/images/whiteArrow.svg" alt="arrow" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isBeginning: boolean;
  isEnd: boolean;
}>();

defineEmits(["slideNext", "slidePrev"]);
</script>

<style scoped lang="scss"></style>
