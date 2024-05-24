<template>
  <div
    class="collection-section"
    :class="{
      'collection-promo-section': variant === 'promo',
      'collection-detailed-section': variant === 'detailed',
    }"
  >
    <h2 class="section-title">Collections</h2>
    <div class="collection-slider">
      <CustomSwiper :activeLoop="true">
        <div
          class="swiper-slide"
          v-for="character in characters"
          :key="character.name"
        >
          <div
            :class="{
              'detailed-character-card': variant === 'detailed',
              'promo-character-card': variant === 'promo',
            }"
          >
            <img :src="`${character.img}`" alt="character" />
            <div class="character-info">
              <span class="character-name">{{ character.name }}</span>
              <span class="character-floor" v-if="variant === 'detailed'"
                >FLOOR: {{ character.floor }}</span
              >
            </div>
          </div>
        </div>
      </CustomSwiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Character } from "~/data";

defineProps<{
  variant: "promo" | "detailed";
  characters: Character[];
}>();
</script>

<style lang="scss" scoped>
.collection-section {
  position: relative;
  width: 100%;
  padding-top: 3.125rem;
  padding-bottom: 6.25rem;
  border-bottom: 8px solid #816797;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .section-title {
    margin-bottom: 3rem;
    margin-left: 9.375rem;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
    @media screen and (max-width: 53.125rem) {
      margin-left: 5rem;
    }
    @media screen and (max-width: 34.375rem) {
      margin-left: 2rem;
    }
  }
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.detailed-character-card {
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
}

.promo-character-card {
  @extend .detailed-character-card;

  .character-info {
    background: #816797;
  }
}

.collection-promo-section {
  .collection-slider {
    max-width: 1070px;
    margin-inline: auto;

    @media only screen and (max-width: 78.125rem) {
      width: 100%;
    }
  }
}
</style>
