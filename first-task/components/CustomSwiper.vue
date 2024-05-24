<template>
  <div class="swiper_container">
    <div ref="sliderRef" class="swiper overflow-x-hidden">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="character in characters"
          :key="character.name"
        >
          <div class="character-card">
            <img :src="`${character.img}`" alt="character" />
            <div class="character-info">
              <span class="character-name">{{ character.name }}</span>
              <span class="character-floor">FLOOR: {{ character.floor }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prev-arrow" @click="handlePrev" v-if="!isBeginning">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
    <div class="next-arrow" @click="handleNext" v-if="!isEnd">
      <img src="/public/images/whiteArrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliderRef = ref<any>(null);
const sliderInstanceRef = ref<any>(null);

onMounted(() => {
  const swiperInstance = new Swiper(sliderRef.value, {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
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

const isBeginning = computed(
  () => sliderInstanceRef.value?.isBeginning ?? false
);
const isEnd = computed(() => sliderInstanceRef.value?.isEnd ?? false);

const handlePrev = () => {
  sliderInstanceRef.value?.slidePrev();
};

const handleNext = () => {
  sliderInstanceRef.value?.slideNext();
};

interface Character {
  name: string;
  floor: string;
  img: string;
}

const characters: Character[] = [
  {
    name: "XO Girls NFT Collection",
    floor: "0.07 ETH",
    img: "images/test1.png",
  },
  {
    name: "Game character 3d Collection",
    floor: "0.05 ETH ",
    img: "images/test2.png",
  },
  {
    name: "Monkey Collections",
    floor: "0.01 ET",
    img: "images/test3.png",
  },
  {
    name: "PROJECT NFT cub ",
    floor: "0.07 ETH",
    img: "images/test4.png",
  },

  {
    name: "XO Girls NFT Collection",
    floor: "0.07 ETH",
    img: "images/test5.png",
  },
  {
    name: "Game character 3d Collection",
    floor: "0.05 ETH ",
    img: "images/test6.png",
  },
  {
    name: "Monkey Collections",
    floor: "0.01 ET",
    img: "images/test7.png",
  },
  {
    name: "PROJECT NFT cub ",
    floor: "0.07 ETH",
    img: "images/test8.png",
  },
  {
    name: "Monkey Collections",
    floor: "0.01 ET",
    img: "images/test9.png",
  },
  {
    name: "PROJECT NFT cub ",
    floor: "0.07 ETH",
    img: "images/test10.png",
  },
];
</script>

<style lang="scss" scoped>
.swiper_container {
  margin: auto;
  width: calc(100% - 100px);
  height: 320px;
  position: relative;

  @media only screen and (max-width: 78.125rem) {
    margin: auto;
    margin-top: 5rem;
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

.character-card {
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    border: 3px solid #52057b;
  }
}

.character-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 22%;
  height: fit-content;
  height: -moz-fit-content;
  background: #000000a8;
  border-radius: 0 0 16px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;

  .character-name {
    font-size: 20px;
    font-weight: bold;
  }

  .character-floor {
    font-size: 16px;
  }
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
</style>
