<template>
  <div class="footer-section__lower">
    <p class="copy-rights">© Copyright NFTify Network. All Rights Reserved.</p>
    <div class="icons-container">
      <span class="icons-title">
        The Leading No-code NFT Marketplace Solution</span
      >
      <ul class="icons">
        <li v-for="image in images" :key="image">
          <button>
            <a href="#"><img :src="image" :alt="image" /></a>
          </button>
        </li>
      </ul>
    </div>
    <div class="terms">
      <span><a href="#">Terms of Service</a></span>
      <span><a href="#">Privacy Policy</a></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "/socialMediaIcons/twitter.png",
  "/socialMediaIcons/telegram.png",
  "/socialMediaIcons/facebook.png",
  "/socialMediaIcons/linkedin.png",
  "/socialMediaIcons/youtube.png",
  "/socialMediaIcons/instagram.png",
];
</script>

<style scoped lang="scss">
.footer-section__lower {
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 1.5rem 0rem;

  @media only screen and (max-width: 75rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5 1rem;
  }
}

.copy-rights {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
}

.icons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icons-title {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    @media only screen and (max-width: 28.125rem) {
      font-size: 18px;
      text-align: center;
    }
  }
  .icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    button {
      border: 1px solid #ffffff9e;
      width: 50px;
      height: 50px;
      border-radius: 1rem;
      background: none;
      cursor: pointer;
    }

    @media only screen and (max-width: 28.125rem) {
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
}

.terms {
  display: flex;
  gap: 1.5rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
}
</style>
