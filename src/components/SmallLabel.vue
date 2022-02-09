<template>
  <div class="big-label">
    <slot></slot>
  </div>
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
  padding: 15px 40px;

  color: white;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bolder;
}
</style>