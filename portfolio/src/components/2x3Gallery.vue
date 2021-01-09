<template>
  <div id="Gallery">
    <div class="columns is-multiline  is-vcentered">
      <div class="column is-half" v-for="work in Work" :key="work.index">
        <Thumbnail :thumbnailData="work" />
      </div>
    </div>
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import Thumbnail from "./Thumbnail";

export default {
  name: "TwoByThreeGallery",
  components: {
    Thumbnail,
  },
  props: {
    Work: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";

html,
body {
  height: 100%;
}
body {
  display: flex;
  align-items: stretch;
}
</style>
