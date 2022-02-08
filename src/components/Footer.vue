<template>
  <footer>
    <section id="upper-footer">
      <div class="container">
        <div id="footer-links" class="col-2">
          <nav v-for="nav in navs" :key="nav.title">
            <h3>{{ nav.title }}</h3>
            <ul>
              <li v-for="link in nav.links" :key="link.text">
                <a href=""> {{ link.text }} </a>
              </li>
            </ul>
          </nav>
          <!-- <nav>
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
          </nav> -->
        </div>
        <div id="footer-logo" class="col-2"></div>
      </div>
    </section>
    <section id="lower-footer">
      <div class="container">
        <a href="#" class="border">
          <h2>Sign-up now!</h2>
        </a>
        <nav>
          <h2>Follow Us</h2>
          <a href="#"
            ><img src="../assets/img/footer-youtube.png" alt="YT logo"
          /></a>
          <a href="#"
            ><img src="../assets/img/footer-youtube.png" alt="YT logo"
          /></a>
          <a href="#"
            ><img src="../assets/img/footer-youtube.png" alt="YT logo"
          /></a>
          <a href="#"
            ><img src="../assets/img/footer-youtube.png" alt="YT logo"
          /></a>
          <a href="#"
            ><img src="../assets/img/footer-youtube.png" alt="YT logo"
          /></a>
        </nav>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      navs: [
        {
          title: "DC Comics",
          links: [
            { text: "characters", url: "#" },
            { text: "comics", url: "#", active: true },
            { text: "movies", url: "#" },
            { text: "tv", url: "#" },
            { text: "games", url: "#" },
            { text: "collectibles", url: "#" },
            { text: "videos", url: "#" },
            { text: "fans", url: "#" },
            { text: "news", url: "#" },
            { text: "shop", url: "#" },
          ],
        },
        {
          title: "Shop",
          links: [
            { text: "shop dc", url: "#" },
            { text: "shop dc collectibles", url: "#" },
          ],
        },
        {
          title: "DC",
          links: [
            { text: "terms of use", url: "#" },
            { text: "privacy policy", url: "#" },
            { text: "ad choices", url: "#" },
            { text: "advertising", url: "#" },
            { text: "jobs", url: "#" },
            { text: "subscriptions", url: "#" },
            { text: "talent workshop", url: "#" },
            { text: "CPSC certificates", url: "#" },
            { text: "ratings", url: "#" },
            { text: "shop help", url: "#" },
            { text: "contact us", url: "#" },
          ],
        },
        {
          title: "sites",
          links: [
            { text: "DC", url: "#" },
            { text: "MAD magazine", url: "#" },
            { text: "DC kids", url: "#" },
            { text: "DC universe", url: "#" },
            { text: "DC power visa", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#upper-footer {
  height: 450px;
  width: 100%;
  background-image: url("../assets/img/footer-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
  }

  h3 {
    text-transform: uppercase;
    color: white;
    margin: 15px 0;
  }

  nav {
    margin-right: 50px;
  }

  ul {
    list-style-type: none;
    li {
      padding: 3px 0;
      a {
        font-size: 0.8rem;
        padding: 10px 0;
        color: #797979;
        text-transform: capitalize;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.col-2 {
  padding: 30px 0;
}

#footer-links {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#footer-logo {
  background-image: url(../assets/img/dc-logo-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#lower-footer {
  background-color: #303030;
  height: 100px;
  text-transform: uppercase;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 1.2em;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin-right: 10px;
    }

    h2 {
      color: #0282f9;
    }
  }
}
</style>