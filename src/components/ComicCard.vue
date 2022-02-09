<template>
  <a href="#" class="comic-card">
    <figure>
      <img :src="thumb" :alt="series + ' Cover Image'" />
    </figure>
    <h5>{{ series }}</h5>
  </a>
</template>

<script>
export default {
  name: "ComicCard",
  props: ["thumb", "series"],
};
</script>

<style lang="scss">
.comic-card {
  color: white;

  flex-basis: calc(100% / 6);
  padding: 20px;
  height: 165px;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.1);
    transition: transform 500ms;
  }

  figure {
    max-height: 100%;
    overflow: hidden;
  }
  h5 {
    margin-top: 20px;
    font-size: 0.6rem;
    font-weight: lighter;
    text-transform: uppercase;
  }
}
</style>