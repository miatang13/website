<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          Biography Website of Brian Collins
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          An interactive informational website of Brian Collins, one of the
          designers who I look up to.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/BrianCollinsWeb/laptop-mock.png"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Web Design + Dev (SOLO)</li>

          <li>Vue.js, HTML & SCSS</li>

          <li>2020 Spring (2 weeks)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overview</span>
        <p class="body__text">
          This project involves creating an informational biography website for
          a specific designer, using visual hiearchy and motion to curate
          pleasing experience. The main challenge is displaying substantial
          amount of information in a clean and engaging manner.
        </p>
        <a
          class="ibm__typeface"
          href="https://www.designhero-briancollins.info/#/"
        >
          site alive
        </a>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <span class="section__title"> Key Interactions <br /> </span>

        <span class="image__caption ibm__typeface">
          1. Interactive Map
        </span>

        <div class="column is-full">
          <img
            class="image is-3by2"
            src="../../../assets/img/BrianCollinsWeb/open_map.gif"
            width="100%"
          />
        </div>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/map_line.gif"
            width="100%"
          />
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            This map displays the places in the United States where Brian
            Collins has led design firms or given talks. When hovering over a
            state which he has visited, information of who, where, when, why and
            the exact location where are shown.
          </p>
        </div>

        <!--

        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <img
              class="image is-square"
              src="../../../assets/img/BrianCollinsWeb/cursor-over-map.gif"
            />
          </div>
        </div> 

        -->

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          2. Gradience & Motion
        </span>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/why.gif"
            width="100%"
          />
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            Presenting information through websites provides us freedom of RGB
            colors, and more importantly, motion. My design represents my
            impression on his work, which is bold but also detail-oriented.
          </p>
        </div>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/history.gif"
            width="100%"
          />
        </div>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/motion-order.gif"
            width="100%"
          />
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            I want to make sure that my layout is extremely simple, with the big
            type delivering his design theories. Furthermore, the layers of
            motion delivers the clean layout in a way that adds complexity and
            intricacy.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          3. Depth
        </span>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/work.gif"
            width="100%"
          />
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            I struggled the most with the page presenting his work. He has so
            much beautiful work that I wanted to showcase, but just like print
            mediums, we have limited space and time before the reader loses
            attention. Hence, I needed to have layers of information that allows
            both skimming and reading.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          4. Responsive
        </span>

        <div class="column is-full">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/responsive.gif"
            width="100%"
          />
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            As always, websites should be responsive.
          </p>
        </div>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-full">
        <span class="image__caption ibm__typeface">
          Selected Screens (Static)
        </span>
      </div>

      <div class="columns is-multiline">
        <div class="column is-half">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/static/work.png"
            width="100%"
          />
        </div>
        <div class="column is-half">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/static/whoheis.png"
            width="100%"
          />
        </div>
        <div class="column is-half">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/static/design.png"
            width="100%"
          />
        </div>
        <div class="column is-half">
          <img
            class="image is-16by9"
            src="../../../assets/img/BrianCollinsWeb/static/history.png"
            width="100%"
          />
        </div>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-two-thirds">
        <span class="section__title"> Thoughts </span>

        <p class="body__text">
          It was a fun project to tell the story of an brilliant designer with
          my own design. Finding the balance and boundary between his style and
          my style was an interesting experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrianCollinsWebSubpage",
  mounted() {
    console.log("BrianCollinsWebSubpage");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";

#BrianCollinsWebSubpage {
}
</style>
