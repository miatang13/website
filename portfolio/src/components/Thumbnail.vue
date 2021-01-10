<template>
  <div id="Thumbnail" class="list-complete-item">
    <!--  @mouseover="mouseEnter()"
      @mouseleave="mouseLeft()"-->
    <div class="thumbnail unselectable" @click="redirect()">
      <figure class="image is-5by3">
        <img class="list-complete-img" :src="getImgUrl()" />
      </figure>

      <div class="overlay" id="overlay">
        <div class="overlay__text">
          <!-- :class="{ on: isOpen }" v-show="isOpen"-->
          <span class="thumbnail__title"> {{ thumbnailData.title }}</span>
          <p class="thumbnail__category">
            {{ thumbnailData.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Thumbnail",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    thumbnailData: {
      title: { type: String, required: true },
      category: { type: String, required: true },
      software: { type: String, required: true },
      imgPath: { type: String, required: true },
      subpageRouter: { type: String, requried: true },
    },
  },
  methods: {
    mouseEnter() {
      this.isOpen = true;
    },
    mouseLeft() {
      this.isOpen = false;
      //   console.log("leave");
    },
    getImgUrl() {
      return require("../assets/img/" + this.thumbnailData.imgPath);
    },
    redirect: function() {
      this.$router
        .push({ path: this.thumbnailData.subpageRouter })
        .catch((err) => {
          // Ignore the vuex err regarding  navigating to the page they are already on.
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            // But print any other errors to the console
            logError(err);
          }
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/functional.scss";
@import "@/assets/styles/colors.scss";

#Thumbnail {
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.thumbnail {
  position: relative;
}

.img__description {
  position: absolute;
  background: $thumbnail-color;
  color: #818181;
  opacity: 50;
  transition: opacity 0.15s, visibility 0.15s;
}

.overlay__text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.thumbnail__title {
  font-size: 2em;
  font-family: ibm-plex-mono, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: $text-color;
}

.thumbnail__category,
.thumbnail__software {
  font-family: freight-text-pro, serif;
  font-weight: 500;
  font-style: italic;
  font-size: 1em; /*calc(14px + 0.5vw); */
  color: $text-color;
}

.on {
  height: 100%;
  opacity: 100%;
  visibility: visible;
  /*border: 1px solid rgb(0, 0, 0); */
}

.list-complete-item .image {
  display: block;
  width: 100%;
  height: auto;
}
.list-complete-item .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: $thumbnail-color;
}
.list-complete-item:hover .overlay {
  opacity: 1;
}
.list-complete-item .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-width: 1020px) {
  .thumbnail__title {
    font-size: 1.5em;
  }
}
</style>
