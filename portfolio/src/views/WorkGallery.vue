<template>
  <div id="WorkGallery">
    <Gallery class="fade-in work" :Work="Work" />
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import TwoByThreeGallery from "./../components/2x3Gallery";

export default {
  name: "WorkGallery",
  components: {
    Gallery: TwoByThreeGallery,
  },
  data() {
    return {
      Work: [
        /*
        {
          name: "PetSimulation",
          index: 0,
          title: "Pet Co-Parenting App",
          category: "Mobile Dev",
          software: "LowDB, socket.io, p5.js",
          imgPath: "PetSimulation/walk_thumbnail.png",
          subpageRouter: "/PetSimulationApp",
        }, 
        {
          name: "DanceCampaignPoster",
          index: 1,
          title: "Community Event Campaign",
          category: "Print & Digital",
          software: "Adobe",
          imgPath: "DanceCampaignDesign/poster_crop1.png",
          subpageRouter: "/AsphaltCampaignPoster",
        },*/
        {
          name: "IrisRover",
          index: 4,
          title: "IrisRover",
          category: "Frontend/UX Engineering",
          software: "Vue.js, VueX, HTML & SCSS",
          imgPath: "IrisRover/IrisRover.jpg",
          subpageRouter: "/IrisRover",
        },
        {
          name: "ChristmasAR",
          index: 1,
          title: "Lonely Christmas",
          category: "AR Mobile Dev",
          software: "Unity, ARFoundations",
          imgPath: "XMasAR/XmasARThumbnail.jpeg",
          subpageRouter: "/XMasAR",
        },
        {
          name: "Shader1",
          index: 6,
          title: "WebGL",
          category: "Shaders",
          software: "",
          imgPath: "Shaders/thumbnails/heatwave.png",
          subpageRouter: "/Shaders",
        },
        /*
        {
          name: "BrianCollinsWeb",
          index: 3,
          title: "Biography Website",
          category: "Web Design + Dev",
          software: "Vue.js, HTML & CSS",
          imgPath: "BrianCollinsWeb/work_screen_thumbnail.png",
          subpageRouter: "/BrianCollinsWeb",
        },
*/
        {
          name: "BrianCollinsDesign",
          index: 2,
          title: "A Designer's Story",
          category: "Print & Digital",
          software: "Adobe",
          imgPath: "BrianCollinsDesign/booklet/booklet.gif",
          subpageRouter: "/BrianCollinsDesign",
        },

        {
          name: "DanceCampaignPoster",
          index: 1,
          title: "Community Event Campaign",
          category: "Print & Digital",
          software: "Adobe",
          imgPath: "DanceCampaignDesign/poster_crop1.png",
          subpageRouter: "/AsphaltCampaignPoster",
        },

        {
          name: "DanceBrochure",
          index: 0,
          title: "Public Asphalt",
          category: "Environment Design",
          software: "",
          imgPath: "DanceCampaignDesign/Opt-asphaltcrop1.png",
          subpageRouter: "/AsphaltArt",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/functional.scss";
</style>
