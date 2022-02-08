<template>
  <header class="container">
    <figure>
      <img src="../assets/img/dc-logo.png" alt="DC Logo" />
    </figure>
    <nav>
      <ul>
        <li><a href="#">characters</a></li>
        <li><a href="#">comics</a></li>
        <li><a href="#">movies</a></li>
        <li><a href="#">tv</a></li>
        <li><a href="#">games</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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
  padding: 10px 0;
}

ul {
  list-style-type: none;
  li {
    display: inline-block;
    padding: 0 10px;
    a {
      text-decoration: none;
      padding: 30px 0;
      &:hover {
        color: #0282f9;
      }
    }
  }
}
</style>