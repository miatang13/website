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
    path: "/Shader1",
    name: "Shader1",
    component: function() {
      return import("./../views/projects/Tech/Shader1.vue");
    },
  },

  {
    path: "/Shader2",
    name: "Shader2",
    component: function() {
      return import("./../views/projects/Tech/Shader2.vue");
    },
  },

  {
    path: "/Shader3",
    name: "Shader3",
    component: function() {
      return import("./../views/projects/Tech/Shader3.vue");
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

export default router;

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
