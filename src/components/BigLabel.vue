<template>
  <a href="#" class="big-label">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "BigLabel",
};
</script>

<style scoped lang="scss">
.big-label {
  display: inline-block;
  background-color: #0282f9;
  padding: 15px 25px;

  color: white;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>