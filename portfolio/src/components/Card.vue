<template>
    <div class = "workCard">

        <!--<IrisCarousel />-->

        <div v-if='hasCarousel' >
            <component :is="carouselComponent">
                <slot />
            </component>
        </div>

        <div v-else-if='is_BC_vid'>
            <div class="resp-container">
                    <iframe src="https://player.vimeo.com/video/419170346" 
                            frameborder="0" 
                            allow="fullscreen" 
                            class="resp-iframe"
                            allowfullscreen></iframe>
            </div>
        </div>

        <div v-else class = "img-wrapper">
                <img :src="imgsrc" style="width:100%;" alt="">
        </div> 

        <div class = "align-bot"> <!-- not working -->

                <div v-if='hasTitle' class = "titles-wrapper">
                        <h2 class="title-text"> {{ this.title}} </h2>
                        <h3 class="subtitle-text"> {{ this.subtitle}} </h3>

                         <div v-if='hasPQ' class = "PQ-wrapper">
                            <h4 class = "pullQuote"> {{ this.pullQuote }} </h4>
                        </div>
                </div>

                <div v-if='hasBlurb' class = "blurb-wrapper">
                        <p>  {{ this.blurb}} </p>
                        <p v-if='hasProcessLink'> Medium Process <a href="processLink"> Link &#8599; </a>  </p> 
                </div>
       
                <div class = "bot-tags columns">
                    <div class = "column is-9">
                            <div v-if='hasTag' class = "tags-wrapper">
                                <div class = "indiv-tag-wrapper">
                                    <workTag :content = this.tags[0] />
                                </div>

                                <div class = "indiv-tag-wrapper">
                                    <workTag :content = this.tags[1] />
                                </div>
                            </div>

                    </div>
                   
                    <div class = "column">
                            <div v-if='hasMore' v-on:click="handleclick" class = "more-button-wrapper">
                                <atomicButton :content = this.expandMsg />
                            </div>
                    </div>
                </div>

                 <div v-if='hasCodeRepo'>
                       <span class = "point-finger"> &#9758;  </span> <a v-bind:href=this.codeRepo> {{ this.linkMsg }} </a>
                </div>
        
        </div> 

    </div>
</template>

<script>
//import IrisCarousel from './IrisCarousel.vue'
import workTag from './WorkTag.vue'
import atomicButton from './Button.vue'

export default {
    name: 'workCard',
    components:{
        workTag,
        atomicButton,
    },
    props:{
        imgsrc: { type: String },
        title: { type: String, },
        subtitle: { type: String, },
        blurb: { type: String,},
        tags: { type: Array,},
        hasCarousel: { type: Boolean, default: false, },
        carouselComponent: { type: Object,},
        hasPQ: { type: Boolean, default: false,},
        pullQuote: { type: String,},
        hasTag: { type: Boolean, default: true,},
        hasTitle: { type: Boolean, default: true,},
        hasBlurb: { type: Boolean, default: true, },
        hasMore: { type: Boolean, default: true, },
        expandMsg: { type: String, default: "Read More" },
        hasProcessLink: { type: Boolean, default: false,},
        processLink: { type: String,},
        hasCodeRepo: {type: Boolean,default: false,},
        codeRepo: {type: String,},
        linkMsg: {type: String,},
        is_BC_vid: { type: Boolean,default: false,},
        method: { type: Function } ,
    },
    methods: {
        handleclick: function(){
            this.$emit("clicked");
        }
    }
}
</script>

<style lang = "scss" scoped>
@import '@/assets/styles/_colors.scss';

.workCard{
    border:3px; 
    border-style:solid; 
    border-color:$color-tag-outline; 
    padding: .5em;
    width: fit-content;
    max-width: 100%;
}

.img-wrapper{
    display:flex;
    border:3px; 
    border-style:solid; 
    border-color: $color-primary; 
}

.titles-wrapper{
    padding-top: .5em;
}

.indiv-tag-wrapper{
    padding-right: .5em;
}

.tags-wrapper{
    display:flex;

}

.blurb-wrapper{
    padding-top: 1em;
    padding-bottom: .2em;
    color: $color-primary;
}

.bot-tags{
    padding-top: .5em;
}

.more-button-wrapper{
    text-align:center;
}

.title-text{
     font-family: Uxum-Medium;
}

.subtitle-text{
     font-family: Uxum-Medium;
     font-size:1em;
}

.PQ-wrapper{
    padding-top: .5em;
}
.pullQuote{
    font-family: Uxum-Regular-Italic;
    font-size: 1.2em;
}

.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>