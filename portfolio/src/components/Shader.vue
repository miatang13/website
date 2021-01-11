<template>
  <div id="fragShader">
    <gl-canvas @update="glslUpdate">
      <gl-program name="main" :code="shaderCode">
        <gl-float name="u_light" :value="light" />
      </gl-program>
    </gl-canvas>
  </div>
</template>

<script>
import Vue from "vue";
import glsl from "vue-glsl";
Vue.use(glsl);

export default Vue.extend({
  data() {
    return {
      light: 0,
      hasCanvas: true,
    };
  },
  props: {
    shaderCode: {
      type: String,
      required: true,
    },
  },
  methods: {
    glslUpdate(tickData) {
      //console.log(tickData);
      this.light = (Math.sin(tickData.iTime) + 1) / 2;
    },
  },
});
</script>

<style lang="scss" scoped></style>
