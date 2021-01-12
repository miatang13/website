<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-full bio__text">
        <span class="intro__text">
          <i>I'm Mia Tang, and I like to make stuff. </i> <br />
          Quick facts about me:
        </span>
        <span class="no__break emoji"
          >&#x20;&lpar;&bull;&#x20;&#x25e1;&bull;&rpar;</span
        >
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-four-fifths" id="current">
        <ul class="lists square__bullet__list top__list">
          <li>
            <b><i>Canadian &#127809; (she/her)</i></b> based in Vancouver,
            British Columbia, where I have 2 corgis.
          </li>
          <li>
            <b><i>Junior </i></b> at Carnegie Mellon University studying
            Computer Science and Graphic Design w/ a minor in Logic. (2022
            expected)
          </li>
          <li>
            <b><i>Frontend Engineer (1+ yr) </i></b> at
            <a href="https://www.linkedin.com/company/irisrover/mycompany/">
              IrisRover</a
            >
            building interfaces for ground officers to drive a lunar rover on
            the moon in 2021.
          </li>
          <li>
            <b><i>Incoming Research Intern </i></b> at
            <a
              href="https://www.cmu.edu/news/stories/archives/2020/june/tool-turns-math-into-pictures.html"
              >Penrose</a
            >
            creating programmable visualization tool for complex mathematical
            topics.
          </li>
          <li class="highlight__text">
            <b><i> Currently Looking for 2021 Summer Internship.</i></b>
          </li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column if-full">
        <figure class="image">
          <img
            src="https://miro.medium.com/max/2000/1*VMxrVbUgJ0oiBl4BFjIIKw.jpeg"
          />
        </figure>
        <span class="image__text ibm__typeface">
          My doggos: Mango & Leeze
        </span>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns">
          <div class="column is-half">
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

          <div class="column" id="details">
            <p>
              Solving a problem that I couldn't solve yesterday gives me the
              greatest joy. My curiosity of everything that I haven't done is
              the reason why I love to work with emerging technology. My
              background in Computer Science equips me to take on technical
              challenges. On top of enjoying the process of making things work,
              I'm also a graphic designer who gets excited about beautiful
              typography, colors, and motion. My past experiences of working as
              a UX Designer and Graphic Designer made me more understanding in
              bridging the communication between design and engineering teams.
              <br />
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
              compelling.
            </p>
          </div>
        </div>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns bottom__section">
          <div class="column is-half right__border">
            <p class="articles__text">
              Contacts
            </p>
            <ul class="lists">
              <li>
                <a
                  href="https://drive.google.com/file/d/19KDh8Ns2NPivDsvjaia6id6irCdVOmmw/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
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

          <div class="column is-half left__padding desktop__only">
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

$intro-text-size: 4vh;

.intro__text {
  font-size: $intro-text-size;
  line-height: $intro-text-size + $intro-text-size/3;
}

.emoji {
  font-size: $intro-text-size;
  font-weight: 500;
}

p {
  font-size: 1em;
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

.lists {
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-bottom: 0.5vw;
  padding-top: 0.5vw;
  font-size: 1em;
}

.small__lists {
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-bottom: 0.5vw;
  padding-top: 0.5vw;
  font-size: 0.8em;
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
  font-size: 1.3em;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-width: 768px) {
  .intro__text {
    font-size: 2em;
    line-height: 1.5em;
  }

  #details {
    font-size: 1em;
  }

  p {
    font-size: 1em;
  }

  .lists {
    font-size: 1em;
  }

  .bio__image {
    padding: 0;
  }

  .top__list {
    font-size: 1em;
  }
}
</style>
