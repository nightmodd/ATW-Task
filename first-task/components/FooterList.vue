<template>
  <div class="footer-list">
    <span class="footer-list__title">{{ listTitle }}</span>
    <ul v-for="item in listItems">
      <li class="footer-list__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  listItems: string[];
  listTitle: string;
}>();
</script>

<style scoped lang="scss">
.footer-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  text-align: left;
  color: #fff;
  ul{
    width: fit-content;
  }
}
.footer-list__title {
  font-size: 15px;
  font-weight: 700;
  line-height: 22.5px;
}
.footer-list__item {
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: #d6d5a8;
}
</style>
