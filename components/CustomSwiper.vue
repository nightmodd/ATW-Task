<template>
  <div
    :class="{
      'swiper-container-detailed': variant === 'detailed',
      'swiper-container-promo': variant === 'promo',
    }"
  >
    <div ref="sliderRef" class="swiper overflow-x-hidden">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
    <div ref="prevArrow" class="prev-arrow" @click="handlePrev">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
    <div ref="nextArrow" class="next-arrow" @click="handleNext">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

Swiper.use([Navigation]);
Swiper.use([Autoplay]);

const sliderRef = ref<HTMLDivElement | null>(null);
const sliderInstanceRef = ref<Swiper | null>(null);
const nextArrow = ref<HTMLElement | null>(null);
const prevArrow = ref<HTMLElement | null>(null);

const props = defineProps<{
  activeLoop: boolean;
  variant: "detailed" | "promo";
}>();

onMounted(() => {
  if (props.variant === "detailed") {
    const swiperInstance = new Swiper(sliderRef.value!, {
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
  } else if (props.variant === "promo") {
    const swiperInstance = new Swiper(sliderRef.value!, {
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
      },
    });
    sliderInstanceRef.value = swiperInstance;
  }
});

const handlePrev = () => {
  sliderInstanceRef.value?.slidePrev();
};

const handleNext = () => {
  sliderInstanceRef.value?.slideNext();
};
</script>

<style lang="scss" scoped>
.swiper-container-detailed {
  margin: auto;
  width: calc(100% - 100px);
  height: 320px;
  position: relative;

  @media only screen and (max-width: 78.125rem) {
    margin-inline: auto;
    width: 95%;
  }
}
.swiper-container-promo {
  @extend .swiper-container-detailed;
  height: 400px;
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
  @media only screen and (max-width: 78.125rem) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (max-width: 900px) {
    width: 50px;
    height: 50px;
  }

  img {
    width: 40px;
    @media only screen and (max-width: 900px) {
      width: 30px;
    }
  }

  @media only screen and (max-width: 34.375rem) {
    display: none;
  }
}

.next-arrow {
  right: -25px;
}

.prev-arrow {
  left: -25px;
  transform: translateY(-50%) rotate(180deg);
}

.swiper-button-disabled {
  display: none;
}
</style>
