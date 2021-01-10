<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          AR Experience For A Christmas In Quarantine
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          An Android Mobile App for isolated people who still seek a festive
          holiday season. No budget no problem.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/XMasAR/XmasARThumbnail.jpeg"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Creative Prototyping</li>

          <li>Unity, ARFoundations</li>

          <li>2020 Fall (2 weeks)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overview</span>
        <p class="body__text">
          This project focuses on creating a mobile augmented reality experience
          for a specific time or location, and I decided to create an software
          to be used during the holiday seasons for people who are isolated and
          are in need of some festive vibes.
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <span class="section__title"> Concept Video </span>
        <div class="columns is-centered">
          <div class="column is-half">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/494582093"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="section__title"> Key Interactions <br /> </span>

        <span class="image__caption ibm__typeface">
          1. Place Your Christmas Tree Anywhere
        </span>

        <div class="columns is-centered">
          <div class="column is-half">
            <img
              class="image is-16by9"
              src="../../../assets/img/XMasAR/lookat_tree.gif"
            />
          </div>
        </div>

        <span class="image__caption ibm__typeface">
          2. Variety of Assets For Decoration
        </span>

        <div class="columns is-centered">
          <div class="column is-half">
            <img
              class="image is-16by9"
              src="../../../assets/img/XMasAR/UI_detail.gif"
            />
          </div>
        </div>

        <span class="image__caption ibm__typeface">
          3. Placing & Deleting
        </span>

        <div class="columns is-centered">
          <div class="column is-half">
            <img
              class="image is-16by9"
              src="../../../assets/img/XMasAR/addition_deletion.gif"
            />
          </div>
        </div>

        <span class="image__caption ibm__typeface">
          4. Surface Snapping for Concrete Blocks
        </span>

        <div class="columns is-centered">
          <div class="column is-half">
            <img
              class="image is-16by9"
              src="../../../assets/img/XMasAR/suface_snap(no_deletion).gif"
            />
          </div>
        </div>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-two-thirds">
        <span class="section__title"> Thoughts </span>

        <p class="body__text">
          The end of year holiday season is always one of the happiest time, but
          for 2020, with the ongoing health concerns around the world, many
          people are left alone away from their family members unlike the usual
          years. Many of my friends are left alone, and setting up a whole
          festive scene might not be financially desirable, therefore I wanted
          to create the augmented reality experience for people to enjoy this
          virtual festive environment without spending a single dime.
        </p>
      </div>

      <div class="column is-full">
        <img src="../../../assets/img/XMasAR/concept_illustration.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XMasARSubpage",
  mounted() {
    console.log("XMasARSubpage");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/functional.scss";
@import "@/assets/styles/project_styling.scss";
</style>
