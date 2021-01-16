import Vue from "vue";
import VueRouter from "vue-router";
import TechGallery from "./../views/TechGallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: TechGallery,
  },
  {
    path: "/visual",
    name: "Visual",
    component: function() {
      return import("../views/VisualGallery.vue");
    },
  },
  {
    path: "/about",
    name: "About",
    component: function() {
      return import("../views/About.vue");
    },
  },

  /////////// project sub page ///////////////

  /*********  TECH  **********/

  {
    path: "/IrisRover",
    name: "IrisRoverSubpage",
    component: function() {
      return import("./../views/projects/Tech/IrisRover.vue");
    },
  },

  {
    path: "/BrianCollinsWeb",
    name: "BrianCollinsWebSubpage",
    component: function() {
      return import("./../views/projects/Tech/BrianCollinsWeb.vue");
    },
  },

  {
    path: "/ColliderBall",
    name: "ColliderBallSubpage",
    component: function() {
      return import("./../views/projects/Tech/ColliderBall.vue");
    },
  },

  {
    path: "/PetClone3DWeb",
    name: "PetClone3DSubpage",
    component: function() {
      return import("./../views/projects/Tech/PetClone3D.vue");
    },
  },

  {
    path: "/PetSimulationApp",
    name: "PetSimulationAppSubpage",
    component: function() {
      return import("./../views/projects/Tech/PetSimulation.vue");
    },
  },
  {
    path: "/XMasAR",
    name: "XMasARSubpage",
    component: function() {
      return import("./../views/projects/Tech/XMasAR.vue");
    },
  },

  {
    path: "/Shaders",
    name: "Shader",
    component: function() {
      return import("./../views/projects/Tech/Shader.vue");
    },
    children: [],
  },
  {
    path: "/Shaders/heatwave",
    name: "heatWaveShader",
    component: function() {
      return import("./../components/shader_components/HeatWave.vue");
    },
  },
  {
    path: "/Shaders/vinylrecord",
    name: "vinylRecordShader",
    component: function() {
      return import("./../components/shader_components/VinylRecord.vue");
    },
  },
  {
    path: "/Shaders/wobblecube",
    name: "wobbleCubeShader",
    component: function() {
      return import("./../components/shader_components/WobbleCube.vue");
    },
  },
  {
    path: "/Shaders/morphtorus",
    name: "morphTorusShader",
    component: function() {
      return import("./../components/shader_components/Morph.vue");
    },
  },
  {
    path: "/Shaders/morphcube",
    name: "morphCubeShader",
    component: function() {
      return import("./../components/shader_components/FlyingCubes.vue");
    },
  },

  /*********  Visual  **********/

  {
    path: "/AsphaltArt",
    name: "AsphaltArt",
    component: function() {
      return import("./../views/projects/Visual/Asphalt.vue");
    },
  },

  {
    path: "/BrianCollinsDesign",
    name: "BrianCollinsDesign",
    component: function() {
      return import("./../views/projects/Visual/BrianCollinsDesign.vue");
    },
  },

  {
    path: "/AsphaltCampaignPoster",
    name: "DanceCampaignPoster",
    component: function() {
      return import("./../views/projects/Visual/DancePoster.vue");
    },
  },

  {
    path: "/DesignDump",
    name: "PrintDesigns",
    component: function() {
      return import("./../views/projects/Visual/DesignDump.vue");
    },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

NProgress.configure({ showSpinner: false, easing: "ease", speed: 500 });

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

//behavior: "smooth"
