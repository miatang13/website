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
          <div class="column is-half">
            <img
              class="image"
              src="@/assets/img/Shaders/gifs/flyingCubes.gif"
              width="100%"
            />
            <span class="image__text ibm__typeface">
              Morphing Cube
            </span>
            <router-link to="/Shaders/morphcube"> View Live</router-link>
          </div>

          <div class="column is-half">
            <img
              class="image"
              src="@/assets/img/Shaders/gifs/morph.gif"
              width="100%"
            />
            <span class="image__text ibm__typeface">
              Morphing Torus
            </span>
            <router-link to="/Shaders/morphtorus"> View Live</router-link>
          </div>

          <div class="column is-half">
            <img
              class="image"
              src="@/assets/img/Shaders/gifs/wobbleCube.gif"
              width="100%"
            />
            <span class="image__text ibm__typeface">
              Wobble Cube
            </span>
            <router-link to="/Shaders/wobblecube"> View Live</router-link>
          </div>

          <div class="column is-half">
            <img
              class="image"
              src="@/assets/img/Shaders/gifs/heatWave.gif"
              width="100%"
            />
            <span class="image__text ibm__typeface">
              Heat Wave
            </span>
            <router-link to="/Shaders/heatwave"> View Live</router-link>
          </div>

          <div class="column is-half">
            <img
              class="image"
              src="@/assets/img/Shaders/gifs/vinylRecord.gif"
              width="100%"
            />
            <span class="image__text ibm__typeface">
              Retro Vinyl Records
            </span>
            <router-link to="/Shaders/vinylrecord"> View Live</router-link>
          </div>
        </div>
      </div>

      <div class="column is-full"><hr /></div>
    </div>
  </div>
</template>

<script>
/*
import HeatWaveShader from "@/components/shader_components/HeatWave.vue";
import VinylRecordShader from "@/components/shader_components/VinylRecord.vue";
import WobbleCubeShader from "@/components/shader_components/WobbleCube.vue";
import MorphShader from "@/components/shader_components/Morph.vue";
import FlyingCubesShader from "@/components/shader_components/FlyingCubes.vue";
*/

export default {
  name: "Shader1Subpage",
  components: {
    /*
    HeatWaveShader,
    VinylRecordShader,
    WobbleCubeShader,
    MorphShader,
    FlyingCubesShader,
    */
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
