<template>
  <div id="app">
   <div id="static-text-container">
   <h1> Mia Tang ( ˘ ³˘) </h1>
    <p> 
    I'm a junior at <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">Carnegie Mellon</a> 
    studying Computer Science and Communications Design w/ a minor in Logic. <br><br>
    
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
    I'm very excited to be joining <a href = "https://www.jam3.com/"> Jam3</a>  in the summer as a 
    creative developer intern, making some cool stuff.
    <br><br>
    </p>

    <div id = "contacts">
      <p> Find me on <a href="https://www.linkedin.com/in/mia-tang/"> LinkedIn</a>, or miatang13[at]gmail[dot]com.</p>
    </div>
    <figure>
          <img
            src="https://miro.medium.com/max/2000/1*VMxrVbUgJ0oiBl4BFjIIKw.jpeg"
          />
        </figure>
        <p> My doggos: Mango & Leeze </p>
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

html { 
  background-color: white;
}

* { 
  color: rgb(0, 0, 0);
  font-family: ibm-plex-mono, sans-serif;
}

h1 {
  font-size: 3vw;
  font-family: ibm-plex-mono, sans-serif;
  padding-bottom: 1vh;
}

p { 
  font-size: 1.2vw;
  font-family: ibm-plex-mono, sans-serif;
}

a { 
  color: rgb(140, 140, 140);
}

img {
  padding-top: 3vh;
}

#static-text-container { 
  padding: 10vh;
  max-width: 60%;
}

@media screen and (max-width: 600px) {
  h1 { 
  font-size: 4vh;
  }
  p {
    font-size: 2vh;
  }
  #static-text-container { 
    max-width: 100%;
    padding: 3vh;
  }

}
</style>
