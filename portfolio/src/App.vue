<template>
  <div id="app">
   <div class= "center">
   <img src = "https://64.media.tumblr.com/4e5d950cf3415279986f6b3df76df147/tumblr_mmxhygg0vn1rfjowdo1_500.gif" />
   <h1 id="greeting"> Hi, I'm Mia Tang ( ˘ ³˘) </h1>
    <p> 
    I'm a junior at Carnegie Mellon <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">(BCSA)</a> 
    studying Computer Science and Communications Design w/ a minor in Mathem. Logic. <br><br>
    Previously at 
     <a href="https://www.linkedin.com/company/irisrover/mycompany/">
      IrisRover</a
    > (Frontend Engineer) &
    <a
      href="https://www.cmu.edu/news/stories/archives/2020/june/tool-turns-math-into-pictures.html"
      >Penrose</a
    > (Researcher), and soon to be at <a href = "https://www.jam3.com/"> Jam3</a> (Developer Intern). 
    
    Previous work available upon request. <br><br>
    Find me on <a href="https://www.linkedin.com/in/mia-tang/"> LinkedIn</a>, or miatang13[at]gmail[dot]com. </p>
    <!--
    Previously worked as a Frontend Engineer at
    <a href="https://www.linkedin.com/company/irisrover/mycompany/">
      IrisRover</a
    >
    building interfaces for a lunar rover
    
    & a Researcher at <a
      href="https://www.cmu.edu/news/stories/archives/2020/june/tool-turns-math-into-pictures.html"
      >Penrose</a
    >
    creating programmable visualization tool for mathematical diagrams. <br> <br>
    I'm very excited to be joining <a href = "https://www.jam3.com/"> Jam3</a>  in the summer 
    as a developer intern. (Yay!)
    <br><br>

    In my free time, I enjoy writing articles and doing illustrations on computer science 
    topics. 
    </p>
    <div id ="article-list">
     <ul class="lists small__list desktop__only">
              <li>
                <a
                  href="https://mia-tang.medium.com/functional-programming-manual-v-1-510ae8671b88"
                >
                  Functional Programming Manual V.1
                </a>
              </li>
              <li>
                <a
                  href="https://mia-tang.medium.com/a-note-on-higher-order-functions-191dc1a48ed4"
                >
                  A Note On Higher Order Functions
                </a>
              </li>
              <li>
                <a
                  href="https://mia-tang.medium.com/interactive-proof-ed5050e8e78d"
                  >Interactive & Zero-Knowledge Proof</a
                >
              </li>
            </ul>
    </div>

    <div id="contacts">
      <p> Find me on <a href="https://www.linkedin.com/in/mia-tang/"> LinkedIn</a>, or miatang13[at]gmail[dot]com. </p>
    </div>

  </div>
  -->

      <div class = "center doggos">
          <img
           class="magenta-stroke"
            src="https://miro.medium.com/max/2000/1*VMxrVbUgJ0oiBl4BFjIIKw.jpeg"
          />
        <p> My doggos: Mango & Leeze ♡ </p>
        </div>
    <footer class = "center">  <p id = "small-text"> [cute crocodile gif from 
      <a href = "https://64.media.tumblr.com/4e5d950cf3415279986f6b3df76df147/tumblr_mmxhygg0vn1rfjowdo1_500.gif"> tumblr </a>] </p></footer>
   </div>
  </div>
   
</template>

<script>

export default {
  mounted() {
    window.addEventListener(
      "beforeunload",
      function(e) {
        document.body.className = "page-loading";
      },
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/static_site.scss";
$green :  rgb(0, 213, 85);
$highlight_color : $green;

* { 
  color: rgb(0, 0, 0);
  font-family: ibm-plex-mono, sans-serif;
}

h1 {
  font-size: 2.5vw;
  font-family: ibm-plex-mono, sans-serif;
  padding-bottom: 2vw;
}

p { 
  font-size: 1.2vw;
  font-family: ibm-plex-mono, sans-serif;
}

ul {
  list-style-type: square;
}

li { 
  font-family: ibm-plex-mono, sans-serif;
  font-size: 1.2vw;
}

a { 
  color: $highlight_color ;
}

footer { 
  padding-left: 10vh;
}

#app { 
  padding: 2vw;
  padding-bottom: 10vw;
  padding-top: 5vw;
}

#static-text-container { 
  padding: 10vh;
  padding-bottom: 0;
  /*padding-left: 40%; */
  max-width: 65%; 
}

#article-list { 
  padding-top: 1vh;
  padding-bottom: 2vh;
}

#small-text { 
 font-size: 1vw;
}

.magenta-stroke { 
  outline: 3px solid $highlight_color ;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.doggos{ 
  padding-top: 5vw;
  padding-bottom: 5vh;
  max-width: 60%;
}


@media screen and (max-width: 600px) {
  h1 { 
  font-size: 4vh;
  }
  p, li, #small-text{
    font-size: 2vh;
  }
  #static-text-container, .doggos, footer { 
    max-width: 100%;
    padding: 3vh;
  }
  ul { 
      list-style-type: none;
  }
  .center { 
    width: 90%;
  }

}
</style>
