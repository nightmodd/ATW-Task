<template>
  <div>
    <Navbar />
    <ResponsiveNavbar />
    <HeroSection />
    <InfiniteImagesCarousel />
    <CharacterDetailsSection
      title="Moddy Character NFT"
      characterDescription="The image is a high-quality digital painting with a resolution of 3000x2000 pixels and is optimized for the web."
      price="$101,593"
      imageSrc="images/firstCharacter.png"
      alt="Moddy Character NFT"
      :reverse="false"
    />
    <CharacterDetailsSection
      title="KattyEfa NFT"
      characterDescription="The image is a high-quality digital painting with a
    resolution of 5000x1250 pixels ."
      price="$1.5 million"
      imageSrc="images/secondCharacter.png"
      alt="KattyEfa NFT"
      :reverse="true"
    />
  </div>
</template>
