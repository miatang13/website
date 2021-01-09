<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-full bio__text">
        <span class="intro__text">
          <i>I'm Mia Tang, and I like to make stuff. </i> <br />
          Quick facts about me:
        </span>
        <span class="emoji">&#x20;&lpar;&bull;&#x20;&#x25e1;&bull;&rpar;</span>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-four-fifths" id="current">
        <p>
          <b><i>Canadian &#127809; </i></b> based in Vancouver, British
          Columbia, where I have 2 corgis named Leeze (5 yr) and Mango (3 yr).
          Pronouns: she/her.
        </p>
        <p>
          <b><i>Junior </i></b> at Carnegie Mellon University studying Computer
          Science and Graphics Design w/ a minor in Logic. (2022 expected)
        </p>
        <p>
          <b><i>Frontend Engineer (1+ yr) </i></b> at
          <a href="https://www.linkedin.com/company/irisrover/mycompany/">
            IrisRover</a
          >
          building interfaces for ground officers to drive a lunar rover on the
          moon in 2021.
        </p>

        <p>
          <b><i>Incoming Research Intern </i></b> at
          <a
            href="https://www.cmu.edu/news/stories/archives/2020/june/tool-turns-math-into-pictures.html"
            >Penrose</a
          >
          creating programmable visualization tool for complex mathematical
          topics.
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column if-full">
        <figure class="image">
          <img src="./../assets/img/Me/mango_leeze.jpg" />
        </figure>
        <span class="image__text ibm__typeface">
          My doggos: Mango & Leeze
        </span>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-box bio__image">
              <img src="./../assets/img/Me/miatang.png" />
            </figure>
          </div>

          <div class="column" id="details">
            <p>
              I enjoy computer science and logic. At the same time, I love
              beautiful typography, graphics, and motion design. So naturally, I
              wanted to combine my interests and create some meaningful stuff —
              whether it is curating emotionally stimulating graphics with code
              or Adobe, or developing robust softwares for people to use.
              <br />
              <br />
              Long story short, I want to design and implement beautiful,
              meaningful, and impactful work. To do that, I’m ready to take on
              new technical challenges, and frankly, the frustration that comes
              with learning new things excites me.
            </p>
          </div>
        </div>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns bottom__section">
          <div class="column is-one-third right__border">
            <p class="articles__text highlight__text">
              Currently looking for 2021 Summer internship ☆
            </p>
            <ul class="lists">
              <li><a href="#"> Resume </a></li>
              <li>
                <a href="https://www.linkedin.com/in/mia-tang/"> LinkedIn </a>
              </li>
              <li><a href="https://twitter.com/Miamiamia0103"> Twitter </a></li>
              <li>
                <p class="a__text">
                  miatang13[at]gmail[dot]com
                </p>
              </li>
            </ul>
          </div>

          <div
            class="column is-one-third articles__section right__border left__padding"
          >
            <p class="articles__text">
              I enjoy writing articles on computer science
            </p>
            <ul class="lists">
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

          <div class="column is-one-third left__padding">
            <p class="articles__text">
              Currently learning and practicing
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

$intro-text-size: 6.3vh;

.bio__image {
  padding: 2rem;
  padding-left: 0;
  padding-top: 0.5rem;
}

.intro__text {
  font-size: $intro-text-size;
  line-height: $intro-text-size + $intro-text-size/3;
}

.emoji {
  font-size: $intro-text-size;
}

p {
  font-size: 1.2em;
}

#details {
  font-size: 1.2em;
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
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: underline;
  color: black;
}

.position__text {
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
  font-style: italic;
}

#current p {
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-bottom: 0.5vw;
  padding-top: 0.5vw;
}

.bottom__section {
  text-align: left;
}

.articles__text {
  padding-bottom: 0.5vh;
  font-size: 1.2em;
}
</style>
