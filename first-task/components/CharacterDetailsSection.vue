<template>
  <div
    :class="{
      'character-details-container': true,
      reverse: reverse,
    }"
  >
    <div class="details-description">
      <span class="title">“{{ title }}“</span>
      <p class="description">
        {{ characterDescription }}
      </p>
      <span class="price">{{ price }}</span>
      <button>
        <img src="~/assets/images/arrow-right.svg" alt="arrow icon" />
      </button>
    </div>

    <img class="character-image" :src="imageSrc" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  characterDescription: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.character-details-container {
  display: flex;
  padding: 6.25rem 9.375rem;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border-bottom: 8px solid #816797;

  @media only screen and (max-width: 87.5rem) {
    padding: 6.25rem 6rem;
  }

  @media only screen and (max-width: 78.125rem) {
    padding: 6.25rem 4rem;
    gap: 2rem;
  }
}

.reverse {
  flex-direction: row-reverse;
}

.details-description {
  max-width: 470px;
  display: flex;
  flex-direction: column;
  font-size: 2.3vw;
  font-weight: 400;
  line-height: 48px;
  text-align: left;

  @media only screen and (max-width: 78.125rem) {
    font-size: 2.7vw;
    line-height: 32px;
  }

  @media only screen and (max-width: 62.5rem) {
    font-size: 3vw;
  }

  @media only screen and (max-width: 43.75rem) {
    font-size: 3.3vw;
  }

  @media only screen and (max-width: 37.5rem) {
    font-size: 24px;
  }
}

button {
  margin-top: 1rem;
  width: fit-content;
  border: 1px solid #52057b;
  border-radius: 50%;
  padding: 0.5rem;
  background: none;
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.character-image {
  width: 39vw;

  @media only screen and (max-width: 43.75rem) {
    .character-image {
      width: 44vw;
    }
  }
}

@media only screen and (max-width: 37.5rem) {
  .character-details-container {
    flex-direction: column;
  }
  .details-description {
    font-size: 4vw;
  }
  .character-image {
    width: 100%;
  }
}
</style>
