<template>
  <div id="ListGallery">
    <div class="columns is-multiline  is-vcentered">
      <div class="column is-full title-wrapper" v-for="work in Work" :key="work.index">
        <h1 class = "Title"> {{work.title }}  </h1>
        <!--<Thumbnail :thumbnailData="work" />-->
      </div>
    </div>
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import Thumbnail from "./Thumbnail";

export default {
  name: "ListGallery",
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

h1 { 
  font-size: 4vw;
}

.title-wrapper{ 
  padding-bottom: 13vh;
}
</style>
