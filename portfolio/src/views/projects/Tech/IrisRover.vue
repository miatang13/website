<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-two-thirds">
        <h1 class="main__title">
          Frontend Engineering @ IrisRover
        </h1>
      </div>

      <div class=" column is-two-thirds">
        <h2 class="main__subtitle">
          IrisRover is the World’s first student-built lunar rover scheduled to
          land on the Moon in 2021 with $79.5 million NASA funding.
        </h2>
      </div>
      <div class="column is-full"><hr /></div>
      <img
        class="banner__image image is-5by3 column is-full"
        src="../../../assets/img/IrisRover/IrisRover.jpg"
      />

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Frontend / UX Engineering</li>

          <li>Vue.js, HTML & CSS</li>

          <li>2019 Dec - Now (1 yr+)</li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>
      <div class="column is-two-thirds">
        <span class="section__title"> Overview</span>
        <p class="body__text">
          IrisRover is being built by Carnegie Mellon Students led by Professor
          Red Whittaker along with Astrobotic and NASA. It is a light-weight
          lunar rover of 4.4 lbs. (two kilograms) originally called CubeRover.
          <br />
          <br />
          Starting from December 2019, I have been working as 1 of the 4
          frontend developers on the UI-development team for IrisRover, creating
          usable interfaces for mission officers to utilize when our rover lands
          on the moon.
        </p>
      </div>

      <img
        class="body__image image is-5by3 column is-full"
        src="../../../assets/img/IrisRover/Ground-Software-Architecture.jpg"
      />

      <div class="column is-two-thirds">
        <span class="section__title"> Details </span>
        <p class="body__text">
          For IrisRover, UI Dev is at the center of Database, Render processes,
          Ground Commands, and Rover Data. Essentially, after we launch the
          rover, a working interface determines if we can achieve our end goal,
          taking photos of the moon.
        </p>
      </div>

      <img
        class="body__image image is-5by3 column is-full"
        src="../../../assets/img/IrisRover/interface.png"
      />

      <div class="column is-two-thirds">
        <p class="body__text">
          The specific interface I have been working on is the Telemetry
          interface, where the data we receive from the rover is analyzed and
          displayed. We use Vue.js as our main framework, and of course, HTML &
          SCSS for markdowns and stylings.
        </p>
      </div>

      <img
        class="body__image image is-5by3 column is-full"
        src="../../../assets/img/IrisRover/cuberover_vid.gif"
      />

      <div class="column is-two-thirds">
        <p class="body__text">
          Stay tuned for software package release. (Soon)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IrisRoverSubpage",
  mounted() {
    console.log("IrisRoverSubpage");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
</style>
