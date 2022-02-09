<template>
  <div class="comic-card">
    <figure>
      <img
        src="https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/AC1000_DLX_162-001_HD_5ba13723281ab0.37845353.jpg?itok=ZsI-C5eX"
        alt="IMG"
      />
    </figure>
    <h5>Action Comics</h5>
  </div>
</template>

<script>
export default {
  name: "ComicCard",
};
</script>

<style lang="scss">
.comic-card {
  color: white;

  flex-basis: calc(100% / 6);
  padding: 20px;
  height: 165px;

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