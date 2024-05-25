<template>
  <div class="hero-section">
    <div class="hero-content">
      <span>Your own NFT Market place without Coding</span>
      <p>
        The fastest and easiest way to fully unlock the potential of your
        digital assets. Create and run an exclusive marketplace for your NFT
        business today!
      </p>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Enter your email....." />
        <button type="submit">Start Free</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const submitForm = () => {
  alert("Thanks For your Subscribing to our newsletter");
};
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("~/assets/images/heroImage.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

  span {
    font-size: 3rem;
    font-weight: 700;
    line-height: 72px;
  }

  p {
    max-width: 500px;
    margin: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  form {
    display: flex;
    max-width: 400px;
    margin: auto;
    gap: 0.5rem;

    input {
      padding: 0.5rem 1rem;
      min-width: 272px;
      background: black;
      color: #d6d5a8;
      border-radius: 1rem;
      border: none;
    }

    button {
      background: #52057b;
      color: #ffff;
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      border: none;
    }

    @media only screen and (max-width: 34.375rem) {
      position: relative;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
      input {
        width: 100%;
      }
      button {
        max-width: 50%;
      }
    }
  }

  @media only screen and (max-width: 46.875rem) {
    width: 80%;
    span {
      font-size: 2.5rem;
      line-height: 48px;
    }
    p {
      width: 90%;
    }
  }

  @media only screen and (max-width: 34.375rem) {
    width: 90%;
    span {
      font-size: 2rem;
    }
  }
}
</style>
