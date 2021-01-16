<template>
  <div class="heatWaveShader">
    <fragShader class="shader" :shaderCode="shaderCode" />
  </div>
</template>

<script>
import FragShader from "./../Shader.vue";

export default {
  name: "HeatWaveShader",
  components: {
    FragShader,
  },
  mounted() {},
  data() {
    return {
      shaderCode: `
          #ifdef GL_ES
          precision mediump float;
          #endif

          #define PI 3.14159265359

          vec2 rotate2D(vec2 _st, float _angle){
              _st -= 0.5;
              _st =  mat2(cos(_angle),-sin(_angle),
                          sin(_angle),cos(_angle)) * _st;
              _st += 0.5;
              return _st;
          }

          void main() {
              vec2 st = gl_FragCoord.xy/iResolution.xy;
              vec3 color = vec3(0.87);
              st = fract(st);
              for (int n = 1; n < 50; n ++){
                  float i = float(n);
                  st += vec2(0.7/i * sin(i*st.y + iTime + 0.5 * i), 0.8/i * sin(st.x + iTime + 0.2 * i) + 2.0 * 1.0);
              }
              st = rotate2D(st, PI * (cos(iTime)) * 0.825 / 100.0);
              st *= 40.0;
              color = vec3( 0.5 * sin(st.x + iTime) + st.x * 0.245, 0.5 * sin(st.y * 0.32478 + iTime) + 0.5, sin(st.x + st.y));
              gl_FragColor = vec4(color,1.0);
          }`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/shader_styling.scss";
</style>
