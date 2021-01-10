<template>
  <div id="VisualGallery">
    <Gallery class="fade-in" :Work="VisualWork" />
  </div>
</template>

<script>
import TwoByThreeGallery from "./../components/2x3Gallery";

export default {
  name: "VisualGallery",
  components: {
    Gallery: TwoByThreeGallery,
  },
  data() {
    return {
      VisualWork: [
        {
          name: "DanceBrochure",
          index: 0,
          title: "Public Asphalt",
          category: "Environment Design",
          software: "",
          imgPath: "DanceCampaignDesign/Opt-asphaltcrop1.png",
          subpageRouter: "/AsphaltArt",
        },
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
          name: "EventPosters",
          index: 3,
          title: "Misc.",
          category: "Interaction, 3D & Vector",
          software: "Adobe",
          imgPath: "PetCloningDesign/interaction.gif",
          subpageRouter: "/DesignDump",
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/functional.scss";
</style>
