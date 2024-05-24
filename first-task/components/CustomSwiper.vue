<template>
  <div class="swiper_container">
    <div ref="sliderRef" class="swiper overflow-x-hidden">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="prev-arrow" @click="handlePrev" ref="prevArrow">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
    <div class="next-arrow" @click="handleNext" ref="nextArrow">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";

Swiper.use([Navigation]);
Swiper.use([Autoplay]);

import "swiper/css";
import "swiper/css/scrollbar";

const sliderRef = ref<any>(null);
const sliderInstanceRef = ref<Swiper | null>(null);
const nextArrow = ref<HTMLElement | null>(null);
const prevArrow = ref<HTMLElement | null>(null);

const props = defineProps<{
  activeLoop: boolean;
}>();

onMounted(() => {
  const swiperInstance = new Swiper(sliderRef.value, {
    slidesPerView: 1,
    loop: props.activeLoop,
    spaceBetween: 20,
    navigation: {
      nextEl: nextArrow.value,
      prevEl: prevArrow.value,
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });

  sliderInstanceRef.value = swiperInstance;
});

const handlePrev = () => {
  sliderInstanceRef.value?.slidePrev();
};

const handleNext = () => {
  sliderInstanceRef.value?.slideNext();
};
</script>

<style lang="scss" scoped>
.swiper_container {
  margin: auto;
  width: calc(100% - 100px);
  height: 320px;
  position: relative;

  @media only screen and (max-width: 78.125rem) {
    margin-inline: auto;
    width: 95%;
  }
}

.swiper {
  height: 100%;
  box-sizing: border-box;
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.next-arrow,
.prev-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #52057b;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 40px;
  }

  @media only screen and (max-width: 34.375rem) {
    display: none;
  }
}

.next-arrow {
  right: -30px;
}

.prev-arrow {
  left: -30px;
  transform: translateY(-50%) rotate(180deg);
}

.swiper-button-disabled {
  display: none;
}
</style>
