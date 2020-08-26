<template>
  <div id="app">
 

    <div class = "header-container"> 
      <div class = "name-container">
           <h1>  <a href = "/" style="color:black;">Mia Tang </a>  </h1> 
      </div>

      <nav class="breadcrumb is-large" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/" aria-current="page">:D</router-link>  </li>
          <li><router-link to="/work">Work</router-link> </li>
          <li><a href = '/'> Resume </a> </li>
        </ul>
      </nav>
    </div>

    <div id = "router-view-container">
      <router-view />
    </div> 

    <footer> © M.T. 2020 </footer>

  </div> 
</template>

<script>
import 'buefy/dist/buefy.css';

export default {
  components: {
  }
}
</script>

<style lang="scss">
/* fonts */
@import '@/assets/styles/_colors.scss';
@import "@/assets/styles/_reset";

@font-face {
    font-family: 'Uxum-Medium';
    src: url('../src/assets/fonts/UxumGrotesque-Medium.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesque-Medium.woff2') format('woff2');
}

@font-face {
    font-family: 'Uxum-Regular';
    src: url('../src/assets/fonts/UxumGrotesque-Regular.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesque-Regular.woff2') format('woff2');
}

@font-face {
    font-family: 'Uxum-Ultra';
    src: url('../src/assets/fonts/UxumGrotesque-Ultra.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesque-Ultra.woff2') format('woff2');
}

@font-face {
    font-family: 'Uxum-UltraLight';
    src: url('../src/assets/fonts/UxumGrotesque-UltraLight.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesque-UltraLight.woff2') format('woff2');
}

@font-face {
    font-family: 'Uxum-Medium-Italic';
    src: url('../src/assets/fonts/UxumGrotesqueItalic-Medium.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesqueItalic-Medium.woff2') format('woff2');
}

@font-face {
    font-family: 'Uxum-Regular-Italic';
    src: url('../src/assets/fonts/UxumGrotesqueItalic-Regular.woff') format('woff'),
         url('../src/assets/fonts/UxumGrotesqueItalic-Regular.woff2') format('woff2');
}

@font-face {
    font-family: 'Voyage';
    src: url('../src/assets/fonts/voyage-regular-webfont.woff') format('woff'),
         url('../src/assets/fonts/voyage-regular-webfont.woff2') format('woff2');
}

html {
  scroll-behavior: smooth;
}


#app {
  font-family: Uxum-Regular, Uxum-Ultra, Uxum-UltraLight, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:5%;
  color: $color-near-black;
}

#nav {
  //padding: 30px;
  float: right;
  margin-right:5%;
  font-size: 2em;
  word-spacing: 2em;

  &.router-link-exact-active {
   
  }
}

/* structure */
footer {
  color: $color-near-black;
  padding-top: 2em;
}

body {
  background-color: $color-near-white;
}

a {
  font-family: Uxum-Regular, Uxum-Ultra, Uxum-UltraLight, sans-serif;
  text-decoration: none;
}

/* specific element */

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

h3 {
  font-size: 1.5em;
}

p {
  line-height: 1.5;
}

/* section does not clash with nav, leaves space in between */ 
section {
  padding: 50px 0 50px 0;
  // overflow: hidden;
}

.Bold-Text{
  padding-bottom: 1em;
}

.name-container{
  padding-bottom: .5em;
}

.header-container{
  //display: flex;
  //justify-content: space-between;  
  position: -webkit-sticky; /* Safari */
  position: sticky;
  padding-bottom: 1em;
  padding-top:.2em;
  top: 0em;
  background-color: $color-near-white;
  z-index: 1;
  //border-bottom: solid 3px;
}

.router-view{
  overflow:hidden;
}

.voyage{
  font-family: Voyage;
}

</style>
