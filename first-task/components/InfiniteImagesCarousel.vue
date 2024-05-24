<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slider-item first">
        <span>Power Leading Brand</span>
      </div>
      <div class="slider-item second">
        <img
          src="assets/images/carouselSecond.png"
          alt="Second Image"
          loading="lazy"
        />
        <span>Coindesk</span>
      </div>
      <div class="slider-item third">
        <img
          src="assets/images/carouselThird.png"
          alt="Third Image"
          loading="lazy"
        />
        <span>H E F T Y V E R S E</span>
      </div>
    </div>

    <div class="slide-track">
      <div class="slider-item first">
        <span>Power Leading Brand</span>
      </div>
      <div class="slider-item second">
        <img
          src="assets/images/carouselSecond.png"
          alt="Second Image"
          loading="lazy"
        />
        <span>Coindesk</span>
      </div>
      <div class="slider-item third">
        <img
          src="assets/images/carouselThird.png"
          alt="Third Image"
          loading="lazy"
        />
        <span>H E F T Y V E R S E</span>
      </div>
    </div>
  </div>
</template>

<style scooped lang="scss">
.slider {
  position: relative;
  display: flex;
  width: 100%;
  height: fit-content;
  white-space: nowrap;
  overflow: hidden;
  background: #816797;
}
.slide-track {
  margin-right: 8.5rem;
  display: flex;
  align-items: center;
  gap: 8.5rem;
  animation: 35s scroll infinite linear;
}
.slider-item {
  width: fit-content;
  height: fit-content;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 48px;
  }
  span {
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@media screen and (max-width: 50rem) {
  .slide-track {
    margin-right: 3rem;
    gap: 5.5rem;
  }
}

@media screen and (max-width: 40rem) {
  .slider-item {
    img {
      width: 45px;
    }
    span {
      font-size: 28px;
    }
  }
}
</style>
