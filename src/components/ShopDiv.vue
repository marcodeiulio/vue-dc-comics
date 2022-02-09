<template>
  <section id="shop-div">
    <div class="container">
      <ShopItem
        v-for="(item, index) in shopItems"
        :key="index"
        :item-text="item.text"
        :item-img="item.img"
        :item-url="item.url"
      />
    </div>
  </section>
</template>

<script>
import ShopItem from "./ShopItem.vue";
export default {
  name: "ShopDiv",
  components: {
    ShopItem,
  },
  data() {
    return {
      shopItems: [
        {
          text: "Digital comics",
          img: "buy-comics-digital-comics.png",
          url: "#",
        },
        {
          text: "DC Merchandise",
          img: "buy-comics-merchandise.png",
          url: "#",
        },
        {
          text: "Subscription",
          img: "buy-comics-subscriptions.png",
          url: "#",
        },
        {
          text: "Comic shop locator",
          img: "buy-comics-shop-locator.png",
          url: "#",
        },
        {
          text: "DC power visa",
          img: "buy-dc-power-visa.svg",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#shop-div {
  height: 100px;
  width: 100%;
  background-color: #0282f9;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>