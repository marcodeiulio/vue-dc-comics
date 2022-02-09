<template>
  <main>
    <section id="jumbotron"></section>
    <section id="games-list"></section>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped lang="scss">
#jumbotron {
  height: 300px;
  width: 100%;
  background-image: url(../assets/img/jumbotron.jpg);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>