<template>
  <div class="collection-section">
    <span>Collections</span>
    <CustomSwiper />
  </div>
</template>

<script setup lang="ts"></script>

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
  span {
    margin-bottom: 3rem;
    margin-left: 9.375rem;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
  }
}
</style>
