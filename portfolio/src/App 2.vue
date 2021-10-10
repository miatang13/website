<template>
  <div id="app">
    <div class="unselectable">
      <router-view />
    </div>
    <div class="bio-link">
      <router-link to="/" class="nav__text"> Some stuff </router-link>
      <router-link to="/about" class="nav__text"> 🥸  how are you? </router-link>
    </div>
      
<!--
    <footer class="footer_container unselectable" id="footer__container">
      <span class="footer__text">
        Mia Tang 2021 ©</span
      >
    </footer>-->
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import $ from "jquery";

export default {
  data() {
    return {};
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

.bio-link{ 
  padding-top: 15vh;
  padding-bottom: 5vh;
}

.nav__text { 
  color: black;
}
</style>
