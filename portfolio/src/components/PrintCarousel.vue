<template>
  <div class="PrintCarousel">
    <VueSlickCarousel v-bind="settings">
      <div>
        <img src = "@/assets/img/booklet/cover&back_2.png"  width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_1.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_2.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_3.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_4.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_5.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_6.png" width=100% >
      </div>
      <div>
        <img src = "@/assets/img/booklet/sp_7.png" width=100% >
      </div>
     </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'buefy/dist/buefy.css';

export default {
  name: 'PrintCarousel',
  components: {
    VueSlickCarousel,
  },
  data() {
      return {
        settings: {
          arrows: true,
          dots: false,
          slidesToScroll: 2,
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

<style lang="scss" scoped>
@import '@/assets/styles/_colors.scss';

</style>