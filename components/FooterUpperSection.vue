<template>
  <div class="footer-section__container">
    <div class="footer-section__upper">
      <div class="newsletter-section">
        <h2 class="section-title">Join our weekly digest!</h2>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Enter your email....." />
          <button type="submit" aria-label="subscribe to newsletter">
            Subscribe
          </button>
        </form>
        <button
          class="create-store-button"
          aria-label="Create your store"
          @click="createStore"
        >
          Create Free Store
        </button>
      </div>
      <div class="footer-lists-container">
        <FooterList :list-title="listsTitle[0]" :list-items="featuresList" />
        <FooterList :list-title="listsTitle[1]" :list-items="serviesList" />
        <FooterList :list-title="listsTitle[2]" :list-items="productList" />
        <FooterList :list-title="listsTitle[3]" :list-items="resoursesList" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const submitForm = () => {
  alert("Thanks For your Subscribing to our newsletter");
};
const createStore = () => {
  alert("We will send you an email to set up your store");
};
const listsTitle = ["FEATURES", "SERVICES", "PRODUCT", "RESOURCES"];
const featuresList = ["Build Store", "Sell NFT", "Grow Business"];
const serviesList = ["Concierge", "Customization"];
const productList = ["About Us", "Whitepaper", "$N1 Token", "Directory"];
const resoursesList = [
  "Help Center",
  "NFTify Branding",
  "Success Stories",
  "Video Tutorials",
  "Contact Support",
];
</script>

<style lang="scss" scoped>
.footer-section__container {
  width: 100%;
  border-bottom: 2px solid #816797;
}
.footer-section__upper {
  display: flex;
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
  justify-content: space-between;
  gap: 6.5rem;
  padding-top: 3.25rem;
  padding-bottom: 2.5rem;
  @media only screen and (max-width: 75rem) {
    gap: 4.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media only screen and (max-width: 59.375rem) {
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }
}

.newsletter-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  align-items: flex-start;

  .section-title {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    text-align: left;
  }

  p {
    width: 85%;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  form {
    display: flex;
    width: 100%;
    gap: 1.125rem;

    input {
      width: 272px;
      border-radius: 1rem;
      opacity: 0.7px;
      background: black;
      color: #fff;
      border: none;
      padding: 0.5rem 1.5rem;
    }

    button {
      width: 110px;
      border-radius: 1rem;
      background: black;
      color: #fff;
      border: none;
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
    }
    @media only screen and (max-width: 28.125rem) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .create-store-button {
    width: 160px;
    border-radius: 1rem;
    background: #52057b;
    color: #fff;
    border: none;
    padding: 0.5rem;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }
}

.footer-lists-container {
  display: flex;
  gap: 6.5rem;
  @media only screen and (max-width: 75rem) {
    gap: 4rem;
  }
  @media only screen and (max-width: 65.625rem) {
    gap: 2rem;
  }
  @media only screen and (max-width: 28.125rem) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
