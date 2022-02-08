<template>
  <header class="container">
    <figure>
      <a href="#"><img src="../assets/img/dc-logo.png" alt="DC Logo" /></a>
    </figure>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.text">
          <a :class="{ active: link.active }" :href="link.url">{{
            link.text
          }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { text: "characters", url: "#", active: false },
        { text: "comics", url: "#", active: true },
        { text: "movies", url: "#", active: false },
        { text: "tv", url: "#", active: false },
        { text: "games", url: "#", active: false },
        { text: "collectibles", url: "#", active: false },
        { text: "videos", url: "#", active: false },
        { text: "fans", url: "#", active: false },
        { text: "news", url: "#", active: false },
        { text: "shop", url: "#", active: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  color: black;
  text-transform: uppercase;
  font-size: 0.8rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;

  li {
    display: inline-block;
    padding: 60px 10px;

    a {
      text-decoration: none;
      padding: 60px 0 55px 0;

      &:hover,
      &.active,
      &.active {
        color: #0282f9;
        border-bottom: 5px solid blue;
      }
    }
  }
}
</style>