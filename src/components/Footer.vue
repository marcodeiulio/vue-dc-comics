<template>
  <footer>
    <section id="upper-footer">
      <div class="container">
        <div id="footer-links" class="col-2">
          <nav>
            <h3>DC Comics</h3>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Tv</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>
            <h3>DC Comics</h3>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
            </ul>
          </nav>
          <nav>
            <h3>DC Comics</h3>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Tv</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
        </div>
        <div id="footer-logo" class="col-2"></div>
      </div>
    </section>
    <section id="lower-footer"></section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
h3 {
  text-transform: uppercase;
  color: white;
  margin: 20px 0;
}

nav {
  margin-right: 50px;
}

.container {
  display: flex;
}

#upper-footer {
  /* 
  TODO da modificare */
  height: 400px;
  width: 100%;

  background-image: url("../assets/img/footer-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  ul {
    list-style-type: none;
    li {
      padding: 5px 0;
      a {
        padding: 10px 0;
        color: #797979;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.col-2 {
  padding-top: 10px;
  padding-bottom: 10px;
}

#footer-links {
  display: flex;
  flex-direction: row;
}

#footer-logo {
  background-image: url(../assets/img/dc-logo-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  background-position: center;
}
</style>