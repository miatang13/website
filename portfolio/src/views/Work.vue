<template>
  <div class="Work">

      <div class = "columns is-multiline ">
        <div class = "column is-half">
              <workCard :imgsrc = this.Iris.imgsrc 
                        :title= this.Iris.title 
                        :subtitle = this.Iris.subtitle
                        :blurb = this.Iris.blurb
                        :tags= this.Iris.tags
                        :hasCarousel = this.Iris.hasComponent
                        :carouselComponent = this.Iris.carouselComponent
                        :hasMore = this.Iris.hasMore
                        :expandMsg = this.Iris.expandMsg 
                        :callBack = this.Iris.callBack
                        :hasPQ = this.Iris.hasPQ
                        :pullQuote = this.Iris.pullQuote
                        :hasCodeRepo = this.YES 
                        :codeRepo = this.Iris.codeRepo
                        :linkMsg = this.Iris.linkMsg
                        />
        </div>

<!--
        <div class = "column">
          <img src="https://img.icons8.com/nolan/64/gears.png"/>
        </div>
-->

        <div class = "column is-full"
             id = "SGAnchor"
             ref = "SGAnchor">
                      <img src="https://img.icons8.com/nolan/64/module.png"/>
        </div>

        <div v-if=this.SGIsOpen class = "column is-full">
                      <processCard :title = this.SkyGlow0.title 
                                   :content = this.SkyGlow0.process
                                   @clicked ="handleSGClick"
                          />
                    
        </div>

        <div v-if=!this.SGIsOpen 
              class = "column is-half" >
                       <workCard  :imgsrc = this.SkyGlow0.imgsrc
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

        <div class = "column is-half">

            <workCard :imgsrc = this.SkyGlow.imgsrc 
                      :title= this.SkyGlow.title 
                      :subtitle = this.SkyGlow.subtitle
                      :blurb = this.SkyGlow.blurb
                      :tags= this.SkyGlow.tags
                      :hasMore= this.NO
                      :hasCodeRepo = this.SkyGlow.hasCodeRepo
                      :codeRepo = this.SkyGlow.codeRepo
                      :linkMsg = this.SkyGlow.linkMsg
                      />      
        </div>

        <div class = "column is-full"
             id = "PosterAnchor"
             ref = "PosterAnchor">
                      <img src="https://img.icons8.com/nolan/64/printed-ocr.png"/>
        </div>

        <div v-if=this.PosterIsOpen class = "column is-full">
                      <processCard :title = this.BC_Poster.title 
                                   :content = this.BC_Poster.process
                                   @clicked ="handlePosterClick"
                          />
                    
        </div>

        <div  v-if=!this.PosterIsOpen class = "column is-half">
        </div>

        <div  v-if=!this.PosterIsOpen  class = "column is-half">
            <workCard  :imgsrc = this.BC_Poster.imgsrc 
                        :tags= this.BC_Poster.tags
                        :hasMore = this.YES
                        :hasCarousel = this.BC_Poster.hasComponent
                        :carouselComponent = this.BC_Poster.carouselComponent
                        :hasCodeRepo = this.YES 
                        :codeRepo = this.BC_Poster.codeRepo 
                        :linkMsg = this.BC_Poster.linkMsg
                        :expandMsg = this.BC_Poster.expandMsg
                        @clicked ="handlePosterClick"
                        />
        </div>

        <div class = "column is-full"
             id = "ZineAnchor"
             ref = "ZineAnchor">
                      <img src="https://img.icons8.com/nolan/64/linux-client.png"/>
        </div>

        <div v-if=!this.ZineIsOpen class = "column is-half">
            <workCard :imgsrc = this.BC_Web.imgsrc 
                      :title= this.BC_Web.title 
                      :subtitle = this.BC_Web.subtitle
                      :blurb = this.BC_Web.blurb
                      :tags= this.BC_Web.tags
                      :hasCodeRepo = this.BC_Web.hasCodeRepo
                      :codeRepo = this.BC_Web.codeRepo
                      :linkMsg = this.BC_Web.linkMsg0
                      :hasMore = this.NO
                      />
        </div>
  
        <div v-if=!this.ZineIsOpen class = "column is-half">
            <workCard :imgsrc = this.BC_Zine.imgsrc 
                      :title= this.BC_Zine.title 
                      :subtitle = this.BC_Zine.subtitle
                      :blurb = this.BC_Zine.blurb
                      :tags= this.BC_Zine.tags
                      :expandMsg = this.BC_Zine.expandMsg
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

        <div class = "column is-full">
            <workCard :carouselComponent = this.BC_Web.carouselComponent
                      :hasCarousel = this.BC_Web.hasComponent
                      :title = this.BC_Web.title
                      :hasBlurb = this.NO 
                      :tags= this.BC_Web.tags
                      :hasMore = this.NO
                      :hasCodeRepo = this.BC_Web.hasCodeRepo
                      :codeRepo = this.BC_Web.siteLink
                      :linkMsg = this.BC_Web.linkMsg1
                      />
        </div>

<!--
        <div class = "column is-full">
            <img src="https://img.icons8.com/nolan/64/create-new.png"/>
        </div>
-->

        <div class = "column is-half">
            <workCard :title = this.BC_Animation.title
                      :blurb = this.BC_Animation.blurb
                      :tags= this.BC_Animation.tags
                      :is_BC_vid = this.YES
                      :hasMore = this.NO
                      />
        </div> 

       
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
          this.scrollToElement("SG");
        }
    },
    handleZineClick(event){
        console.log(event, "Zine is clicked and handled!");
        let cur = this.ZineIsOpen;
        this.ZineIsOpen = !cur;

        if (this.ZineIsOpen == false) {
          this.scrollToElement("Zine");
        }
    },
    handlePosterClick(event){
        console.log(event, "Poster is clicked and handled!");
        let cur = this.PosterIsOpen;
        this.PosterIsOpen = !cur;

        if (this.PosterIsOpen == false) {
          this.scrollToElement("Poster");
        }
    },
    scrollToElement(elemName) {
        if (elemName == "SG"){
          const el = document.getElementById('SGAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView();
             console.log("I'm scrolling")
          }        
        } else if (elemName == "Zine"){
          const el = document.getElementById('ZineAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView();
             console.log("I'm scrolling")
          }
        } else if (elemName == "Poster"){
          const el = document.getElementById('PosterAnchor');
          if (document.body.contains(el)){
             el.scrollIntoView();
             console.log("I'm scrolling")
          }
        }
    }
  },

  data() {
    return {
        NO: false,
        YES: true,
        SGIsOpen: false,
        ZineIsOpen: false,
        PosterIsOpen: false,
        Iris: {
            imgsrc: "https://www.astrobotic.com/system/news/cuberover-2019.jpg",
            hasComponent: true,
            carouselComponent: IrisCarousel,
            title: "IrisRover",
            subtitle: "(CMU x Astrobotics)",
            tags: ["Front-End Engineering",  "On-Going (8 months +)"], 
            blurb: "I work as 1 of the 4 frontend developers on the entire team, developing working interfaces for the land operators to utilize. Interface package developed using Vue will be released soon on Github.",
            hasMore: false,
            expandMsg: "More Details",
            hasPQ: true,
            pullQuote: "IrisRover (originally CubeRover) is the first lightweight lunar rover launching to the Moon in 2021 with $79.5 million NASA funding.",
            codeRepo: "https://www.astrobotic.com/2019/10/2/astrobotic-s-cuberover-program-awarded-2-million-contract-by-nasa",
            linkMsg: "NEWS ARTICLE"
        },

        SkyGlow0: {
            imgsrc: "https://www.designhero-briancollins.info/img/skyglow2.e25055cf.gif",
            title: "SkyGlow",
            subtitle: "",
            tags: ["Creative Computing", "Python"],
            blurb: "These animations are created for a constellation detecting application, SkyGlow,  I created to enhance interactivity and merge my interest of design and coding.",
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
            tags: ["Print Design", "2 weeks"], 
            blurb: "A 14 page A4-sized zine telling the stories of the designer Brian Collins. The difficulty lies in balancing between his style and my own.",
            expandMsg: "Pages in Detail",
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
            hasBlurb: false,
            hasMore: true,
            title: "Poster Design",
            expandMsg: "Process Snippets",
            codeRepo: "https://medium.com/@xinrant/c-studio-project-1-372ed1a5fdd0",
            linkMsg: "MEDIUM PROCESS",
            process:"BC_Poster",
        },

        BC_Web: {
            imgsrc: "https://www.designhero-briancollins.info/img/where.e0017780.png",
            title: "Web Design",
            tags: ["Digital Design", "HTML, CSS, js"],
            hasTag: true,
            blurb: "Website designed and implemented to tell the stories of Brian Collins. ",
            hasComponent: true,
            carouselComponent: DigitalCarousel,
            hasCodeRepo: true,
            codeRepo: "https://github.com/miatang13/brian-collins",
            siteLink: "https://www.designhero-briancollins.info/#/",
            linkMsg0: "GIT REPO",
            linkMsg1: "SITE LIVE"
        },

        BC_Animation: {
            title: "Motion Graphics",
            tags: ["Digital Design", "After Effects"],
            blurb: "A 1 minute video showing what I find most interesting and compelling about Brian Collins."
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