<template>
  <div id="app">
    <nav class="sidenav unselectable" id="navBar">
      <router-link to="/" class="nav__text" id="tech__nav">Pg. 1</router-link>
      <router-link to="/about" class="nav__text" id="about__nav"
        >Pg. 2<br />
      </router-link>
    </nav>

    <div class="router__view unselectable">
      <router-view />
    </div>

<!---->
    <footer class="footer_container unselectable" id="footer__container">
      <span class="footer__text">
        Mia Tang 2021 ©</span
      >
    </footer>
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import $ from "jquery";

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

</style>
