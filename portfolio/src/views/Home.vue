<template>
  <div class="Work">
      
      <div class = "columns is-multiline ">

        <div class = "column is-full"
              id = "topAnchor"
              ref = "topAnchor">
        </div>

         <div v-if="IrisIsOpen" class = "column is-full">
              <processCard :title = this.Iris.title 
                                   :content = this.Iris.process
                                   @clicked ="handleIrisClick"
                          />
        </div>

        <div v-if="IrisDivOn" class = "column is-half">
              <workCard :imgsrc = this.Iris.imgsrc 
                        :title= this.Iris.title 
                        :blurb = this.Iris.blurb
                        :tags= this.Iris.tags
                        :hasCarousel = this.NO
                        :carouselComponent = this.Iris.carouselComponent
                        :hasMore = this.YES
                        :callBack = this.Iris.callBack
                        :hasCodeRepo = this.YES 
                        :codeRepo = this.Iris.codeRepo
                        :linkMsg = this.Iris.linkMsg
                        @clicked ="handleIrisClick"
                        />
        </div>

<!--
        <div class = "column">
          <img src="https://img.icons8.com/nolan/64/gears.png"/>
        </div>


        <div class = "column is-full"
             id = "SGAnchor"
             ref = "SGAnchor">
                      <img src="https://img.icons8.com/nolan/64/module.png"/>
        </div>
-->

        <div v-if=this.SGIsOpen class = "column is-full">
                      <processCard :title = this.SkyGlow0.title 
                                   :content = this.SkyGlow0.process
                                   @clicked ="handleSGClick"
                          />
                    
        </div>

        <div v-if=!this.SGIsOpen 
              class = "column is-half" >
                       <workCard  :imgsrc = this.SkyGlow.imgsrc
                                  :title = this.SkyGlow0.title
                                  :blurb = this.SkyGlow0.blurb
                                  :tags= this.SkyGlow0.tags
                                  :hasMore= this.SkyGlow0.hasMore
                                  :hasCodeRepo = this.SkyGlow0.hasCodeRepo
                                  :codeRepo = this.SkyGlow0.codeRepo
                                  :linkMsg = this.SkyGlow0.linkMsg
                                  @clicked ="handleSGClick"
                      />
        </div>  


        <div class = "column is-full"
              id = "secondAnchor"
              ref = "secondAnchor">
        </div>

        <div v-if=this.WebIsOpen class = "column is-full">
            <processCard :title= this.BC_Web.title 
                         :content = this.BC_Web.process 
                         @clicked ="handleWebClick" 
                         />
        </div>

        <div v-if="BCWebDivOn" class = "column is-half">
            <workCard :imgsrc = this.BC_Web.imgsrc 
                      :title= this.BC_Web.title 
                      :subtitle = this.BC_Web.subtitle
                      :blurb = this.BC_Web.blurb
                      :tags= this.BC_Web.tags
                      :hasCodeRepo = this.BC_Web.hasCodeRepo
                      :codeRepo = this.BC_Web.siteLink
                      :linkMsg = this.BC_Web.linkMsg1
                      :hasMore = this.YES
                      @clicked ="handleWebClick"
                      />
        </div>

        <div v-if=this.PosterIsOpen class = "column is-full">
                      <processCard :title = this.BC_Poster.title 
                                   :content = this.BC_Poster.process
                                   @clicked ="handlePosterClick"
                          />
                    
        </div>

        <div  v-if=!this.PosterIsOpen  class = "column is-half">
            <workCard  :imgsrc = this.BC_Poster.imgsrc 
                        :tags= this.BC_Poster.tags
                        :hasMore = this.YES
                        :hasCodeRepo = this.YES 
                        :codeRepo = this.BC_Poster.codeRepo 
                        :linkMsg = this.BC_Poster.linkMsg
                        :title = this.BC_Poster.title 
                        :blurb = this.BC_Poster.blurb
                        @clicked ="handlePosterClick"
                        />
        </div>

        <div class = "column is-full"
             id = "thirdAnchor"
             ref = "thirdAnchor">
        </div>

        <div v-if=!this.ZineIsOpen class = "column is-half">
            <workCard :imgsrc = this.BC_Zine.imgsrc 
                      :title= this.BC_Zine.title 
                      :subtitle = this.BC_Zine.subtitle
                      :blurb = this.BC_Zine.blurb
                      :tags= this.BC_Zine.tags
                      :hasCodeRepo= this.BC_Zine.hasProcessLink
                      :codeRepo = this.BC_Zine.processLink
                      :linkMsg = this.BC_Zine.linkMsg
                      :hasMore = this.BC_Zine.hasMore 
                      @clicked ="handleZineClick"
                      />
        </div>

        <div v-if=this.ZineIsOpen class = "column is-full">
            <processCard :title= this.BC_Zine.title 
                         :content = this.BC_Zine.process
                          @clicked ="handleZineClick" />
        </div>

        <div class = "column is-half">
            <workCard :title = this.BC_Animation.title
                      :blurb = this.BC_Animation.blurb
                      :tags= this.BC_Animation.tags
                      :is_BC_vid = this.YES
                      :hasMore = this.NO
                      :hasCodeRepo = this.YES 
                      :codeRepo = this.BC_Animation.vimeo_link
                      :linkMsg = this.BC_Animation.linkMsg
                      />
        </div> 
        
<!--
        <div class = "column is-full">
            <img src="https://img.icons8.com/nolan/64/start.png"/>
        </div>
-->


       
      </div>



  </div>
</template>

<script>
import workCard from '@/components/Card.vue';
import processCard from '@/components/ProcessCard.vue';
import IrisCarousel from '@/components/IrisCarousel.vue'
import DigitalCarousel from '@/components/DigitalCarousel.vue'
import BCPosterCarousel from '@/components/BC_Poster_Carousel.vue'

export default {
  components: {
    workCard,
    processCard,
  },

  methods: {
    handleSGClick(event){
        console.log(event, "SG is clicked and handled!");
        let cur = this.SGIsOpen;
        this.SGIsOpen = !cur;

        if (this.SGIsOpen == false) {
          this.scrollToElement("TOP");
        }
    },
    handleZineClick(event){
        console.log(event, "Zine is clicked and handled!");
        let cur = this.ZineIsOpen;
        this.ZineIsOpen = !cur;

        if (this.ZineIsOpen == false) {
          this.scrollToElement("3");
        }
    },
    handlePosterClick(event){
        console.log(event, "Poster is clicked and handled!");
        let cur = this.PosterIsOpen;
        this.PosterIsOpen = !cur;

        if (this.PosterIsOpen == false) {
          this.scrollToElement("2");
        }
    },
    handleWebClick(event){
        console.log(event, "Web is clicked and handled!");
        let cur = this.WebIsOpen;
        this.WebIsOpen = !cur;

        if (this.WebIsOpen == false) {
          this.scrollToElement("2");
        }
    },
    handleIrisClick(event){
        console.log(event, "Iris is clicked and handled!");
        let cur = this.IrisIsOpen;
        this.IrisIsOpen = !cur;

        if (this.WebIsOpen == false) {
          this.scrollToElement("TOP");
        }
    },
    scrollToElement(elemName) {
        if (elemName == "TOP"){
          const el = document.getElementById('topAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView({behavior: "smooth"});
             console.log("I'm scrolling")
          }        
        } 
        else if (elemName == "2"){
          const el = document.getElementById('secondAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView({behavior: "smooth"});
             console.log("I'm scrolling")
          }
        } 
        else if (elemName == "3"){
          const el = document.getElementById('thirdAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView({behavior: "smooth"});
             console.log("I'm scrolling")
          }
        } 
        else if (elemName == "4"){
          const el = document.getElementById('fourthAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView({behavior: "smooth"});
             console.log("I'm scrolling")
          }
        } 
        
    }
  },

  computed: {
    IrisDivOn: function(){
          return (!this.IrisIsOpen) && (!this.SGIsOpen);
    },
    BCWebDivOn: function(){
          return (!this.WebIsOpen) && (!this.PosterIsOpen);
    },
  },

  data() {
    return {
        NO: false,
        YES: true,
        SGIsOpen: false,
        ZineIsOpen: false,
        PosterIsOpen: false,
        WebIsOpen: false,
        IrisIsOpen: false,
        Iris: {
            imgsrc: "https://www.astrobotic.com/system/news/cuberover-2019.jpg",
            hasComponent: true,
            carouselComponent: IrisCarousel,
            title: "IrisRover",
            subtitle: "(CMU x Astrobotics)",
            tags: ["Front-End Engineering",  "On-Going (8 months +)"], 
            blurb: "The World's first lightweight lunar rover launching to the Moon in 2021.",
            hasMore: false,
            hasPQ: true,
            pullQuote: "IrisRover (originally CubeRover) is the first lightweight lunar rover launching to the Moon in 2021 with $79.5 million NASA funding.",
            codeRepo: "https://www.astrobotic.com/2019/10/2/astrobotic-s-cuberover-program-awarded-2-million-contract-by-nasa",
            linkMsg: "NEWS ARTICLE",
            process: "IrisRover",
        },

        SkyGlow0: {
            imgsrc: "https://www.designhero-briancollins.info/img/skyglow2.e25055cf.gif",
            title: "SkyGlow",
            subtitle: "",
            tags: ["Creative Computing", "Python"],
            blurb: "A constellation detection application with computational graphics.",
            hasMore: true,
            hasCodeRepo: true,
            codeRepo: "https://github.com/miatang13/SkyGlow",
            linkMsg: "GIT REPO",
            process: "SkyGlow",
        },

        SkyGlow: {
            imgsrc: "https://www.designhero-briancollins.info/img/skyglow.3fd4c4fa.gif",
            imgsrc1: "https://www.designhero-briancollins.info/img/skyglow2.e25055cf.gif",
            title: "",
            subtitle: "",
            tags: ["Creative Computing", "Python"],
            blurb: "Creating animations through code gives enormous freedom, and I enjoyed creating animations that either represents real-world occurrences or allows perfect mechanical geometries that we will never see in the world.",
            hasMore: false,
            hasCodeRepo: true,
            codeRepo: "https://raw.githubusercontent.com/miatang13/15112TP/master/MAIN/openingCircle.py",
            linkMsg: "CODE SNIPPET",
        },

        BC_Zine: {
            imgsrc: "https://www.designhero-briancollins.info/img/booklet.d935bae1.gif",
            title: "Zine Design",
            subtitle: "",
            tags: ["Print Design", "8.5(w) x 11(h)"], 
            blurb: "A 14 page letter-sized zine telling the stories of the designer Brian Collins. The difficulty lies in balancing between his style and my own.",
            hasProcessLink: true,
            processLink: "https://medium.com/@xinrant/c-studio-project-2-7368c0b96024?source=friends_link&sk=4d38f420b0494596a288fd85ddc4e13c",
            linkMsg: "MEDIUM PROCESS",
            process: "BC_Zine",
        },

        BC_Poster: {
            imgsrc: "https://www.designhero-briancollins.info/img/45-wavy.0278acff.png",
            tags: ["Print Design", "19.25(w) x 31.75(h)"],
            hasComponent: true,
            carouselComponent: BCPosterCarousel,
            hasTag: true,
            hasMore: true,
            title: "Poster Design",
            codeRepo: "https://medium.com/@xinrant/c-studio-project-1-372ed1a5fdd0",
            linkMsg: "MEDIUM PROCESS",
            blurb: "Informational poster for someone who knows nothing about Brian Collins.",
            process:"BC_Poster",
        },

        BC_Web: {
            imgsrc: "https://miro.medium.com/max/700/1*GZPvY0qOHyOKv1zpMoWceA.png",
            title: "Web Design + Dev",
            tags: ["Digital Design", "HTML, CSS, js"],
            hasTag: true,
            blurb: "Website designed and implemented to tell the stories of Brian Collins. ",
            hasComponent: true,
            carouselComponent: DigitalCarousel,
            hasCodeRepo: true,
            codeRepo: "https://github.com/miatang13/brian-collins",
            siteLink: "https://www.designhero-briancollins.info/#/",
            linkMsg0: "GIT REPO",
            linkMsg1: "SITE LIVE",
            process: "BC_Web",
        },

        BC_Animation: {
            title: "Motion Graphics",
            tags: ["Digital Design", "After Effects"],
            blurb: "A 1 minute video showing what I find most interesting and compelling about Brian Collins.",
            vimeo_link: "https://vimeo.com/419170346",
            linkMsg: "VIDEO ON VIMEO",
        }
    }
  },
 
}
</script>

<style lang = "scss" scoped>

.choose-view{
  display:flex;
}

.point-finger{
  padding-right: 5px;
}

.cards-wrapper{
  display:flex;
}

.hero-1{
  font-family: Voyage;
  font-size: 15em;
}

.right-align-hero{
  text-align: right;
}

.bot-align-hero{
  text-align: left;
}

</style>