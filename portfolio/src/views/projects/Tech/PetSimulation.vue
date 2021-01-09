<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          Collaborative Digital Pet Caretaking Software
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          Doggo is a Mobile App that allows you and your family to take care of
          a virtual pet, and to track who's the most responsible one.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/PetSimulation/petHeart.png"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Creative Prototyping</li>

          <li>LowDB, Socket.IO, p5.js</li>

          <li>2020 Fall (2 weeks)</li>
        </ul>
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Overview</span>
        <p class="body__text">
          This project explores a new way of communication between people, where
          instead of words or text, people communicate through actions: taking
          care of the virtual pet.
        </p>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <span class="section__title"> Concept Video </span>
        <div class="columns is-centered">
          <div class="column is-half">
            <iframe
              src="https://player.vimeo.com/video/494582532"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <span class="section__title"> Key Interactions </span>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-two-thirds">
        <span class="section__title"> Process </span>

        <p class="body__text">
          process text
        </p>
      </div>

      <div class="column is-three-fifths">
        <ul
          class="square__bullet__list ibm__typeface"
          style="padding-top: 2vh; padding-bottom: 2vh;"
        >
          <li>
            hungry, thirsty (set time)→ tap on food / water bowl to feed
          </li>
          <li>
            need company (random time, but fixed amount to satisfy)→ users need
            to pet the dog by touching the screen
          </li>
          <li>
            need walk (set time) → need user to actually go outside and move
            around for 15 minutes or more
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetSimulationSubpage",
  mounted() {
    console.log("PetSimulationSubpage");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";
</style>
