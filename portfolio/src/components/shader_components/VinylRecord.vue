<template>
  <div class="vinylRecordShader">
    <fragShader class="shader" :shaderCode="shaderCode" />
  </div>
</template>

<script>
import FragShader from "./../Shader.vue";

export default {
  name: "VinylRecordShader",
  components: {
    FragShader,
  },
  data() {
    return {
      shaderCode: `
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
@import "@/assets/styles/shader_styling.scss";
</style>
