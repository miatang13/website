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
          <li>WebGL Related Stuff</li>
          <li>On-going</li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full image is-1by1">
        <span class="image__caption ibm__typeface">
          Shader: Heave Wave
        </span>
        <HeatWaveShader />
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-full image is-1by1">
        <span class="image__caption ibm__typeface">
          Shader: Retro Vinyl Records
        </span>
        <VinylRecordShader />
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-full ">
        <span class="image__caption ibm__typeface">
          Shader: Wobble Cubey
        </span>
        <WobbleCubeShader />
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-full ">
        <span class="image__caption ibm__typeface">
          Shader: Morph
        </span>
        <MorphShader />
      </div>
    </div>
  </div>
</template>

<script>
import HeatWaveShader from "@/components/shader_components/HeatWave.vue";
import VinylRecordShader from "@/components/shader_components/VinylRecord.vue";
import WobbleCubeShader from "@/components/shader_components/WobbleCube.vue";
import MorphShader from "@/components/shader_components/Morph.vue";

export default {
  name: "Shader1Subpage",
  components: {
    HeatWaveShader,
    VinylRecordShader,
    WobbleCubeShader,
    MorphShader,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/project_styling.scss";
@import "@/assets/styles/functional.scss";

.shader {
  height: 60vw;
}
</style>
