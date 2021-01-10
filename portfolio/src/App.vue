<template>
  <div id="app">
    <nav class="sidenav unselectable" id="navBar">
      <router-link to="/" class="nav__text">Tech</router-link>
      <router-link to="/visual" class="nav__text">Visual</router-link>
      <router-link to="/about" class="nav__text"
        >& Me <br />
        <!-- &#x295;&bull;&#x32b;&#x361;&bull;&#x294;&#x266c;&#x2727;&#x20; -->
      </router-link>
    </nav>
    <div class="router__view">
      <router-view />
    </div>

    <footer class="footer_container unselectable" id="footer__container">
      <span class="footer__text ibm__typeface">
        Built with Vue and <strike>love</strike> coffee. Mia Tang 2021 ©</span
      >
    </footer>
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import $ from "jquery";

/*
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}); */

export default {
  mounted() {
    window.addEventListener(
      "beforeunload",
      function(e) {
        document.body.className = "page-loading";
      },
      false
    );
    this.routeChange();
  },
  watch: {
    "$route.name"() {
      this.routeChange();
    },
  },
  methods: {
    routeChange() {
      let navBar = document.getElementById("navBar");
      let footer = document.getElementById("footer__container");
      let navText = [...document.getElementsByClassName("nav__text")];
      if (this.$route.name != "Home" && this.$route.name != "Visual") {
        navBar.style.backgroundColor = "white";
        footer.style.backgroundColor = "white";
        document.body.style.backgroundColor = "white";
        navText.forEach((text) => (text.style.fontWeight = "200"));
      } else {
        navBar.style.backgroundColor = "black";
        footer.style.backgroundColor = "black";
        document.body.style.backgroundColor = "black";
        navText.forEach((text) => (text.style.fontWeight = "400"));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/functional.scss";
@import "@/assets/styles/ui__elements.scss";
$fade-in-time: 0.2s;

#app {
  font-family: freight-text-pro, serif;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}

.router__view {
  padding: 2rem;
  margin-left: $sidebar-width; /* sidebar-width; Same as the width of the sidebar */
  height: 100%;
}

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: $sidebar-width; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid $highlight-color;
  transition: all $fade-in-time ease-in-out;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  padding-right: 0;
  padding-left: 0;
  text-decoration: none;
  font-size: 20px;
  color: $inactive-link-color;
  display: block;
  font-weight: 800;
  font-family: ibm-plex-mono, sans-serif;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: $text-color;
}

.footer_container {
  bottom: 0;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 3rem;
  margin-top: 1rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid $highlight-color;
  transition: all $fade-in-time ease-in-out;
}

.footer__text {
  color: $highlight-color;
  font-weight: 600;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-width: 1020px) {
  .sidenav {
    width: 100%;
    height: 5%;
    flex-direction: row;
    overflow-x: visible;
    align-items: stretch;
    padding-bottom: 1vw;
    /*justify-content: normal; */
  }

  .sidenav a {
    padding: 2vw;
  }

  .router__view {
    margin: 0;
    margin-top: 2vh;
    padding: 3vw;
  }

  .footer__text {
    font-size: 0.8em;
    font-weight: 500;
    padding: 1em;
  }
}
</style>
