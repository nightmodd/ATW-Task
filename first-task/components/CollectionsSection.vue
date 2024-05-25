<template>
  <div
    class="collection-section"
    :class="{
      'collection-promo-section': variant === 'promo',
      'collection-detailed-section': variant === 'detailed',
    }"
  >
    <div class="section-header">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <button v-if="!activeLoop" class="category-button">View Category</button>
    </div>
    <div class="collection-slider">
      <CustomSwiper :activeLoop="activeLoop">
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
  sectionTitle: string;
  activeLoop: boolean;
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
  .section-header {
    display: flex;
    margin: 0rem 9.375rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.125rem;
    max-width: 75rem;

    @media screen and (max-width: 68.75rem) {
      margin: 0rem 5rem;
      margin-bottom: 3.125rem;
    }

    @media screen and (max-width: 62.5rem) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
    }
    @media screen and (max-width: 34.375rem) {
      margin: 0rem 2rem;
      margin-bottom: 3.125rem;
    }
  }

  .section-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
    @media screen and (max-width: 34.375rem) {
      font-size: 32px;
      line-height: 50px;
    }
  }
  .category-button {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    color: #fff;
    background: #52057B;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
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
    border: 2px solid #52057b;
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
  img {
    border: 1px solid #816797;
  }

  .character-info {
    background: #816797;
  }
}

.collection-promo-section {
  .collection-slider {
    max-width: 78.125rem;
    margin-inline: auto;
    @media only screen and (max-width: 78.125rem) {
      width: 100%;
    }
  }
}
</style>
