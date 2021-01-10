<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          A Designer's Story
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          A series of print and digital design about the designer, Brian
          Collins.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/BrianCollinsDesign/booklet/45_3.png"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Print + Digital Design</li>

          <li>Adobe</li>

          <li>2020 Spring (7 weeks)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overview </span>
        <p class="body__text">
          This is a series of print and digital designs to tell the personal
          story and work of the designer Brian Collins, who is the founder of
          the brand agency
          <a href="https://www.wearecollins.com/"> COLLINS </a>.
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns is-multiline">
          <span class="image__text ibm__typeface">
            Main Poster
          </span>
          <img
            class="image is-5by3 column is-full"
            src="../../../assets/img/BrianCollinsDesign/crippledPoster.png"
          />
          <div class="column is-full"><hr /></div>
          <span class="image__text ibm__typeface">
            16 Page Zine
          </span>
          <img
            class="image is-5by3 column is-full"
            src="../../../assets/img/BrianCollinsDesign/booklet/booklet.gif"
          />
          <button class="expand__btn ibm__typeface" @click="isOpen = !isOpen">
            View all spreads
          </button>
          <div class="zine__details" v-if="isOpen">
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/cover&back.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_1.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_2.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_3.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_4.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_5.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_6.png"
            />
            <img
              class="image is-5by3 column is-full"
              src="../../../assets/img/BrianCollinsDesign/booklet/sp_7.png"
            />
            <button class="expand__btn ibm__typeface" @click="isOpen = false">
              Close
            </button>
          </div>
          <div class="column is-full"><hr /></div>
          <div class="column is-full">
            <span class="image__text ibm__typeface">
              Biography Video
            </span>
          </div>
          <div class="columns is-centered">
            <div class="column is-half">
              <iframe
                src="https://player.vimeo.com/video/419170346"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column is-full"><hr /></div>
          <span class="image__text ibm__typeface">
            Web Experience (Design + Dev)
            <router-link to="/BrianCollinsWeb"> Details </router-link></span
          >
          <img
            class="image is-5by3 column is-full"
            src="../../../assets/img/BrianCollinsWeb/laptop-mock.png"
          />

          <div class="column is-full"><hr /></div>
          <div class="column is-full">
            <span class="image__text ibm__typeface">
              Mobile Experience
            </span>
          </div>
          <div class="columns is-centered">
            <div class="column is-half">
              <iframe
                src="https://player.vimeo.com/video/414320248"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrianCollinsDesignSubpage",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";

button {
  outline: none;
  border: none;
}
</style>
