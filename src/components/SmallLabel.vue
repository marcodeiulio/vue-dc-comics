<template>
  <a href="#" class="small-label">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SmallLabel",
};
</script>

<style scoped lang="scss">
.small-label {
  display: inline-block;
  background-color: #0282f9;
  padding: 12px 40px;

  color: white;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bolder;
}
</style>