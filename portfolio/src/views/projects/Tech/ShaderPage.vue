<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-four-fifths">
        <h1 class="main__title">
          WebGL
        </h1>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <ul class="project__tags">
          <li>Shaders</li>
          <li>On-going</li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full">
        <div class="columns is-multiline is-vcentered">
          <div
            class="column is-half padded__div"
            v-for="data in datas"
            :key="data.name"
          >
            <ShaderDisplay :data="data" />
          </div>
        </div>
      </div>

      <div class="column is-full"><hr /></div>
    </div>
  </div>
</template>

<script>
import ShaderDisplay from "./../../../components/ShaderBlockDisplay.vue";

export default {
  name: "Shader1Subpage",
  components: {
    ShaderDisplay,
  },
  data() {
    return {
      datas: [
        {
          name: "Color Tunnel",
          subpageLink: "/Shaders/colortunnel",
          gifLink: "colorTunnel.gif",
        },
        {
          name: "Hand Mixer",
          subpageLink: "/Shaders/handmixer",
          gifLink: "handMixer.gif",
        },
        {
          name: "Morphing Cube",
          subpageLink: "/Shaders/morphcube",
          gifLink: "flyingCubes.gif",
        },
        {
          name: "Morphing Torus",
          subpageLink: "/Shaders/morphtorus",
          gifLink: "morph.gif",
        },
        {
          name: "Wobble Cube",
          subpageLink: "/Shaders/wobblecube",
          gifLink: "wobbleCube.gif",
        },
        {
          name: "Heat Wave",
          subpageLink: "/Shaders/heatwave",
          gifLink: "heatWave.gif",
        },
        {
          name: "Vinyl Records",
          subpageLink: "/Shaders/vinylrecord",
          gifLink: "vinylRecord.gif",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";

.shader {
  height: 60vh;
  width: 80vw;
}
</style>
