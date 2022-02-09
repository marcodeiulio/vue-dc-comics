<template>
  <main>
    <section id="jumbotron"></section>
    <section id="comics-list">
      <div class="container">
        <ComicCard />
      </div>
    </section>
  </main>
</template>

<script>
import ComicCard from "./ComicCard.vue";
export default {
  name: "Main",
  components: {
    ComicCard,
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

#comics-list {
  height: 450px;
  background-color: #1c1c1c;

  .container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>