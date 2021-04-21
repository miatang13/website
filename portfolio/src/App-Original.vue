<template>
  <div id="app">
    <!--
    <vue-scroll-progress-bar
      @complete="handleComplete"
      height=".1rem"
      backgroundColor="magenta"
      containerColor="grey"
    />
    -->
    <nav class="sidenav unselectable" id="navBar">
      <router-link to="/" class="nav__text" id="tech__nav">Tech</router-link>
      <router-link to="/visual" class="nav__text" id="visual__nav"
        >Visual</router-link
      >
      <router-link to="/about" class="nav__text" id="about__nav"
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
import AOS from "aos";
import Scrollbar from "smooth-scrollbar";
Scrollbar.init(document.querySelector("#my-scrollbar")); */

export default {
  data() {
    return {};
  },
  created() {
    // AOS.init();
  },
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
@import "@/assets/styles/app.scss";

.custom {
  width: 500px;
  height: 500px;
  overflow: auto;
}
</style>
