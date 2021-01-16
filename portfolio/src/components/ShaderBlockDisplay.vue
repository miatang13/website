<template>
  <div class="shaderDisplay">
    <img class="image" :src="getImgUrl()" width="100%" />
    <span class="image__text ibm__typeface">
      {{ data.name }}
    </span>
    <router-link :to="data.subpageLink"> View Live </router-link>
  </div>
</template>

<script>
export default {
  name: "ShaderDisplay",
  props: {
    data: {
      name: {
        type: String,
        required: false,
        default: "",
      },
      subpageLink: {
        type: String,
        required: true,
      },
      gifLink: {
        type: String,
        required: true,
      },
    },
  },
  methods: {
    getImgUrl() {
      return require("../assets/img/Shaders/gifs/" + this.data.gifLink);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";

a {
  color: black;
  text-decoration: underline;
}
</style>
