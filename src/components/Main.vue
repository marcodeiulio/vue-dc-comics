<template>
  <main>
    <section id="jumbotron"></section>
    <section id="games-list">
      <div class="container">
        <GameCard />
      </div>
    </section>
  </main>
</template>

<script>
import GameCard from "./GameCard.vue";
export default {
  name: "Main",
  components: {
    GameCard,
  },
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

#games-list {
  height: 450px;
  background-color: #1c1c1c;

  .container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>