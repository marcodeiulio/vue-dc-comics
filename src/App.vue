<template>
  <div id="app" class="container">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
