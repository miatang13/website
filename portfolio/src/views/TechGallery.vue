<template>
  <div id="TechGallery">
    <Gallery class="fade-in" :Work="TechWork" />
  </div>
</template>

<script>
import "buefy/dist/buefy.css";
import TwoByThreeGallery from "./../components/2x3Gallery";

export default {
  name: "TechGallery",
  components: {
    Gallery: TwoByThreeGallery,
  },
  data() {
    return {
      TechWork: [
        {
          name: "PetSimulation",
          index: 0,
          title: "Pet Co-Parenting App",
          category: "Mobile Dev",
          software: "LowDB, socket.io, p5.js",
          imgPath: "PetSimulation/opt_thumbnail.png",
          subpageRouter: "/PetSimulationApp",
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
        /*
        {
          name: "PetCloning",
          index: 2,
          title: "Clone your bff?",
          category: "3D Web Design + Development",
          software: "THREE.js",
          imgPath: "PetCloningWeb/standing.png",
          subpageRouter: "/PetClone3DWeb",
        }, */

        {
          name: "IrisRover",
          index: 4,
          title: "IrisRover",
          category: "Frontend/UX Engineering",
          software: "Vue.js, VueX, HTML & SCSS",
          imgPath: "IrisRover/mock_crop.png",
          subpageRouter: "/IrisRover",
        },

        {
          name: "BrianCollinsWeb",
          index: 3,
          title: "Biography Website",
          category: "Web Design + Dev",
          software: "Vue.js, HTML & CSS",
          imgPath: "BrianCollinsWeb/crop_thumbnail1.png",
          subpageRouter: "/BrianCollinsWeb",
        },
        {
          name: "Shader1",
          index: 6,
          title: "WebGL",
          category: "Shaders",
          software: "",
          imgPath: "Shaders/Heatwave/screenshot.png",
          subpageRouter: "/Shaders",
        },
        {
          name: "ColliderBall",
          index: 5,
          title: "Collider Ball",
          category: "Interactive Art",
          software: "p5.js (no external library)",
          imgPath: "ColliderBall/thumbnail1.gif",
          subpageRouter: "/ColliderBall",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/functional.scss";
</style>
