<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          Interactive Graphics
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          For fun.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/ColliderBall/ballThumbnail1.gif"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Creative Coding (SOLO)</li>

          <li>p5.js</li>

          <li>2019 (1 week)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overview </span>
        <p class="body__text">
          Creating animations through code gives enormous freedom, and I enjoyed
          creating animations that either represents real-world occurrences or
          allows perfect mechanical geometries that we will never see in the
          world. <br />
          <br />
          This is a selected creative coding project. Feel free to push the ball
          in different directions. Full screen experience is recommended.
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="glitch-embed-wrap" style="height: 800px; width: 100%;">
          <iframe
            src="https://glitch.com/embed/#!/embed/colliderball?path=sketch.js&previewSize=100"
            title="colliderball on Glitch"
            allow="geolocation; microphone; camera; midi; vr; encrypted-media"
            style="height: 100%; width: 100%; border: 0;"
          >
          </iframe>
        </div>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-two-thirds">
        <span class="section__title"> Interactions Demos </span>
      </div>

      <span class="image__caption ibm__typeface column is-full">
        1. No interaction
      </span>

      <div class="columns is-centered">
        <div class="column is-full">
          <img
            class="image"
            src="../../../assets/img/ColliderBall/no_interaction.gif"
          />
        </div>
      </div>
      <div class="column is-full"><hr /></div>

      <span class="image__caption ibm__typeface column is-full">
        2. Single Interaction
      </span>

      <div class="columns is-centered">
        <div class="column is-full">
          <img
            class="image"
            src="../../../assets/img/ColliderBall/single_interaction.gif"
          />
        </div>
      </div>
      <div class="column is-full"><hr /></div>

      <span class="image__caption ibm__typeface column is-full">
        3. Multiple Interactions
      </span>

      <div class="columns is-centered">
        <div class="column is-full">
          <img
            class="image"
            src="../../../assets/img/ColliderBall/continuous_interaction.gif"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColliderBallSubpage",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";
</style>
