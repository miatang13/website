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
          <li>On-going</li>
        </ul>
      </div>

      <div class="column is-full"><hr /></div>

      <div class="column is-full ">
        <fragShader class="shader" :shaderCode="heatWaveShaderCode" />
      </div>
      <div class="column is-full"><hr /></div>

      <div class="column is-full ">
        <fragShader class="shader" :shaderCode="vinylRecordShaderCode" />
      </div>
      <div class="column is-full"><hr /></div>

      <!--
      <div class="column is-full ">
        <fragShader class="shader" :shaderCode="vinylRecordShaderCode" />
      </div>
      <div class="column is-full"><hr /></div> -->
    </div>
  </div>
</template>

<script>
import fragShader from "@/components/fragShader.vue";

export default {
  name: "Shader1Subpage",
  components: {
    fragShader,
  },
  mounted() {
    //console.log("Shader1Subpage");
  },
  data() {
    return {
      heatWaveShaderCode: `
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
      vinylRecordShaderCode: `
          #ifdef GL_ES
          precision mediump float;
          #endif

          float circleShape(vec2 position, float radius){
              return smoothstep(radius, length(position - vec2(0.5)), 0.12);
          }

          float band (float pos, float width){
              float halfWidth = width * 0.5;
              return (step(-halfWidth, pos) - step(halfWidth, pos));
          }

          float rectangle(vec2 pos, float width, float height){
              return band(pos.x, width) * band(pos.y, height);
          }

          void main() {
            vec2 st = gl_FragCoord.xy/iResolution.xy;
            st *= 5.0; // tiling 
            st.y += 0.;
            st = fract(st);
            vec3 color = vec3(0.000,0.000,0.000);    
            st += circleShape(st, sin(iTime) * 0.25 + -0.007) *2.0;
            color = vec3(st, 0.9);         
            color -= rectangle(st, 0.3, 0.3) * 0.3;       
            color = vec3(smoothstep(0.9, length(st - vec2(0.5)), 0.12));          
            color += sin(st.y * cos(iTime / 30.0) * 60.0) + sin(st.y * cos(iTime / 15.0) * 10.0);
            gl_FragColor = vec4(color,1.);
          }`,
    };
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
