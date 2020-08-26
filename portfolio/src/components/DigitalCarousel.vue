<template>
  <div class="DigitalCarousel">

    <VueSlickCarousel v-bind="settings">
      <div>
        <img src = "@/assets/img/website/map.gif" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/website/why.gif" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/website/history.gif" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/website/work.gif" width=100% >
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'DigitalCarousel',
  components: {
    VueSlickCarousel,
  },
   data() {
      return {
        settings: {
          arrows: false,
          dots: true,
          slidesToScroll: 1,
          slidesToShow: 2,
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