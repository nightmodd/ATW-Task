<template>
  <div>
    <NavBar />
    <ResponsiveNavbar />
    <HeroSection />
    <InfiniteImagesCarousel />
    <CharacterDetailsSection
      title="Moddy Character NFT"
      character-description="The image is a high-quality digital painting with a resolution of 3000x2000 pixels and is optimized for the web."
      price="$101,593"
      image-src="images/firstCharacter.png"
      alt="Moddy Character NFT"
      :reverse="false"
    />
    <CharacterDetailsSection
      title="KattyEfa NFT"
      character-description="The image is a high-quality digital painting with a
    resolution of 5000x1250 pixels ."
      price="$1.5 million"
      image-src="images/secondCharacter.png"
      alt="KattyEfa NFT"
      :reverse="true"
    />
    <CollectionsSection
      variant="detailed"
      :characters="characters"
      section-title="Collections"
      :active-loop="true"
    />
    <CollectionsSection
      variant="promo"
      :characters="promoCharacters"
      section-title="Trending in Photography"
      :active-loop="false"
    />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { characters, promoCharacters } from "~/data";
</script>
