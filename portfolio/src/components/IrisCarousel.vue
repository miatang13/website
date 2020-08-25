<template>
  <div class="IrisCarousel">
    <VueSlickCarousel v-bind="settings">
      <div><img src = "@/assets/img/Iris/IrisRover.jpg" width=100% > </div>
      <div><img src = "@/assets/img/Iris/dashboard-design-spec-bg.png" width=100% ></div>
      <div><img src = "@/assets/img/Iris/ErrorAnalysisData1.png" width=100% > </div>
     </VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'IrisCarousel',
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
@import '@/assets/styles/_colors.scss';

.VueCarousel-slide {
   
}
</style>