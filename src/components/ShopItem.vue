<template>
  <a :href="itemUrl">
    <figure>
      <img
        :src="require(`../assets/img/${itemImg}`)"
        :alt="itemText + ' image'"
        :class="{ svg: itemImg.includes('.svg') }"
      />
      <figcaption>{{ itemText }}</figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: "ShopItem",
  props: ["itemText", "itemImg", "itemUrl"],
};
</script>

<style scoped lang="scss">
figure {
  margin: 0 10px;
  display: flex;
  align-items: center;
  img {
    height: 50px;
    &.svg {
      height: 30px;
    }
  }
  figcaption {
    margin: 0 5px;
    color: white;
    font-size: 0.7rem;
    font-weight: lighter;
  }
}
</style>