<template>
  <div class="root">
    <div class="columns is-multiline unselectable">
      <div class="column is-full bio__text">

        <p class="intro__text">
          ✌️ Hello, I'm Mia Tang (she/her), <br> <!--<span class = "no__break emoji">◟(๑•͈ᴗ•͈)◞ </span> <br>-->
          a rising Senior at Carnegie Mellon University 
           <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">BCSA</a>   
          program studying Computer Science and Communications Design w/ a minor in Logic. 
          <br> <br> 
          👩‍💻 Currently at <a href ="http://jam3.com/"> Jam3 </a> this 
          summer as a developer intern, creating 3D Web experiences. <br> <br> 
          
          🌇 Previously @ 
          <a href="https://www.linkedin.com/company/irisrover/mycompany/">
              IrisRover</a
            >
          (frontend-engineering), and @ <a
              href="https://penrose.ink/"
              >Penrose</a
            >
          (graphics software research). 
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <figure class="image">
          <img
            src="https://miro.medium.com/max/2000/1*VMxrVbUgJ0oiBl4BFjIIKw.jpeg"
          />
        </figure>
        <p> My dogs Mango & Leeze ♥</p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns">
          <div class="column is-half hidden">
            <figure class="image is-box bio__image">
              <img
                src="./../assets/img/personal/Opt-miatang_bio.jpeg"
                width="100%"
              />
            </figure>

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
              <li>
                <a href="#" class="isDisabled">
                  Alpha Beta & Mini Max (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          <div class="column unselectable " id="details">
            <p>
              Solving a problem that I couldn't solve yesterday gives me the
              greatest joy. 
              <br /><br />
              My curiosity of everything that I haven't done is
              the reason why I love to work with technology. My background in
              Computer Science equips me to take on technical challenges. On top
              of enjoying the process of making things work, I'm also a graphic
              designer who gets excited about beautiful typography, colors, and
              motion. 
            <!-- <br />
              <br />
              Another important aspect of my work is my interest in
              storytelling, or put simply, explaining stuff. I realized this
              when I was a teaching assistant for a CS class. To help my
              students, I spent time thinking about how to explain complicated
              topics for people with varied backgrounds, and have fun while
              understanding it. This applies to all kinds of information sharing
              that happens in digital and physical worlds. I believe in creating
              engaging experiences that smoothly delivers meaningful content to
              its audience. Whether I'm a writer, designer, or a developer, I
              want to write, design, or build work that is accessible and
              compelling. --> 
            </p>
          </div>
        </div>
      </div>

       <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns bottom__section">
          <div class="column is-half">
            <p class="articles__text">
              Contacts
            </p>
            <ul class="lists">
              <li>
                  Resume Available Upon Request
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mia-tang/"> LinkedIn </a>
              </li>
              <li>
                miatang13[at]gmail[dot]com
              </li>
            </ul>
          </div>

          <div class="column is-half left__padding desktop__only hidden">
            <p class="articles__text">
              Learning and practicing
            </p>
            <ul class="lists ibm__typeface">
              <li>THREE.js</li>
              <li>OpenFrameworks</li>
              <li>3D Shaders</li>
              <li>touchdesigner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <hr id="bottom__section" /> -->
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/functional.scss";
@import "@/assets/styles/project_styling.scss";

$intro-text-size: 3.5vw;

.intro__text {
  font-size: $intro-text-size;
  line-height: $intro-text-size + $intro-text-size/3;
  padding-bottom: 1em;
}

.emoji {
  /*font-size: $intro-text-size;*/
  font-weight: 500;
}


.root { 
  padding: 5vw;
} 

#details {
  font-size: 1.8em;
  padding: 1vw;
  padding-top: 0;
  padding-right: 0;
  padding-left: 0;
}

#looking___for {
  padding-top: 0.7vw;
  font-size: 1.2em;
}

hr #bottom__section {
  height: 0.02vh;
  color: gray;
}

a {
  font-weight: 400;
  font-style: normal;
  text-decoration: underline;
  color: black;
}

.position__text {
  font-weight: 400;
  font-style: italic;
}

.lists {
  font-weight: 400;
  font-style: normal;
  padding-bottom: 0.5vw;
  padding-top: 0.5vw;
  font-size: 1.5vw;
}


.bottom__section {
  text-align: left;
}

.articles__text {
  padding-bottom: 0.5vh;
  font-size: 1.2em;
}

.bio__image {
  padding-right: 3vw;
  padding-top: 0;
}

.top__list {
  font-size: 1.5vw;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-width: 768px) {
  .intro__text {
    font-size: 2em;
    line-height: 1.5em;
  }

  #details {
    font-size: 0.8em;
    padding-top: 0.5em;
  }

  p {
    font-size: 1em;
  }

  .lists {
    font-size: 1.5em;
  }

  .bio__image {
    padding: 0;
  }

  .top__list {
    font-size: 1.5em;
  }

  .intro__text { 
    font-size: 1.3em;
  }
}
</style>
