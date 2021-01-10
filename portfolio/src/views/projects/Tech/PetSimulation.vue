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
        src="../../../assets/img/PetSimulation/thumbnail_green.png"
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
          care of the virtual pet. <br />
          <br />
          <i
            >* Project originally developed on glitch, and I'm currently
            rewriting it for IOS so original code for this is not public at the
            moment.</i
          >
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
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-three-fifths">
        <span class="section__title"> Target Audience </span>
        <ul
          class="square__bullet__list ibm__typeface"
          style="padding-top: 2vh; padding-bottom: 2vh;"
        >
          <li>
            First time pet owners.
          </li>
          <li>
            Couples / Families who wants to know who is the most responsible one
            (for real).
          </li>
          <li>
            Bored people who wants a digital pet.
          </li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <span class="section__title"> Key Interactions <br /> </span>

        <span class="image__caption ibm__typeface">
          1. Rest State
        </span>

        <div class="columns is-centered is-vcentered">
          <div class="column is-two-thirds">
            <figure class="image">
              <img
                src="../../../assets/img/PetSimulation/rest.gif"
                width="100%"
              />
            </figure>
          </div>

          <div class="column">
            <figure class="image left__padding">
              <img src="../../../assets/img/PetSimulation/screen_rest.gif" />
            </figure>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            This is the default state of the pet, where the recorded last visit
            time and the daily pet and walk data are displayed.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          2. Petting Interaction
        </span>

        <div class="columns is-centered is-vcentered">
          <div class="column is-two-thirds">
            <figure class="image">
              <img
                src="../../../assets/img/PetSimulation/pet.gif"
                width="100%"
              />
            </figure>
          </div>

          <div class="column">
            <figure class="image left__padding">
              <img src="../../../assets/img/PetSimulation/screen_pet.gif" />
            </figure>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            This is the interaction that simulates petting an actual dog. The
            number of minutes of petting time is recorded in the database.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          3. Walk (Wiggle for attention)
        </span>

        <div class="columns is-centered is-vcentered">
          <div class="column is-two-thirds">
            <figure class="image">
              <img
                src="../../../assets/img/PetSimulation/walk.gif"
                width="100%"
              />
            </figure>
          </div>

          <div class="column">
            <figure class="image left__padding">
              <img
                src="../../../assets/img/PetSimulation/screen_wiggleNRun.gif"
                width="100%"
              />
            </figure>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            The pet will be in the wiggle state if it has not been walked today
            to notify its owner that we should go on a walk. The actual location
            of the phone will be recorded, and the location needs to be changing
            for the 15 minutes as the user starts the walk.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          4. Feed (Turns Away for attention)
        </span>

        <div class="columns is-centered is-vcentered">
          <div class="column is-two-thirds">
            <figure class="image">
              <img
                src="../../../assets/img/PetSimulation/feed.gif"
                width="100%"
              />
            </figure>
          </div>

          <div class="column">
            <figure class="image left__padding">
              <img
                src="../../../assets/img/PetSimulation/screen_feed.gif"
                width="100%"
              />
            </figure>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p class="body__text">
            The pet goes in starving state twice a day for breakfast and dinner,
            and the owner needs to feed with the simple interaction within 60
            minutes after the starving phase begins.
          </p>
        </div>

        <div class="column is-full"><hr /></div>

        <span class="image__caption ibm__typeface">
          5. Daily log & Weekly log on contribution
        </span>

        <div class="column is-full">
          <figure class="image">
            <img src="../../../assets/img/PetSimulation/log.gif" width="100%" />
          </figure>
        </div>
      </div>

      <p class="body__text column is-two-thirds">
        Lastly and most importantly, the user can check his/her own data of
        contribution on a daily basis, and every friday, the users will be able
        to see all the other users's in the same registered family. "Who really
        took care of the pet?" will no longer be a needed question.
      </p>

      <div class="column is-full"><hr /></div>

      <div class="column is-two-thirds">
        <span class="section__title"> Thoughts </span>

        <p class="body__text">
          This project is motivated by my own identity of being a pet owner, and
          my worry about pets being abandoned after the pandemic ends. Many
          people have bought or adopted new pets into their lives due to
          loneliness caused by quarantine, and I truly worry about once our life
          goes back to normal, are they ready for the daily responsibilities of
          having a pet?
        </p>
      </div>

      <!-- <div class="column is-full"><Pet /></div>-->
    </div>
  </div>
</template>

<script>
//import Pet from "./3DPetDisplay.vue";

export default {
  name: "PetSimulationSubpage",
  components: {
    // Pet,
  },
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
