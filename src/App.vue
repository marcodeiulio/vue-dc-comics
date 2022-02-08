<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
// TODO Dividere stile nei vari fogli scss
@import url("./assets/sass/style.scss");

* {
  font-family: "Segoe UI", "Open Sans", Helvetica, sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
