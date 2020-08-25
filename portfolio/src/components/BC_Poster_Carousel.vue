<template>
  <div class="PosterCarousel">
    <VueSlickCarousel v-bind="settings">
      <div><img src = "@/assets/img/poster/45-wavy.png" width=100% > </div>
      <div><img src = "@/assets/img/poster/poster.png" width=100% ></div>
     </VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'buefy/dist/buefy.css';

export default {
  name: 'BCPosterCarousel',
  components: {
    VueSlickCarousel,
  },
  data() {
      return {
        settings: {
          arrows: false,
          dots: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          dotsClass: "slick-dots custom-dot-class",
          responsive: [
            {
              breakpoint: 600,
              settings: 
              {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]
        },
      }
  }
}
</script>

<style lang="scss">

</style>