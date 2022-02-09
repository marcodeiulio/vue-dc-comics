<template>
  <div id="app">
    <Header />
    <Main />
    <ShopDiv />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import ShopDiv from "./components/ShopDiv.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    ShopDiv,
  },
};
</script>

<style lang="scss">
// TODO Dividere stile nei vari fogli scss
@import url(./assets/sass/style.scss);
* {
  font-family: "Segoe UI", "Open Sans", Helvetica, sans-serif;
}

.container {
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
