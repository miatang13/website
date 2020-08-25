<template>
    <div class = "processCard">
    <div class = 'titles-wrapper'>
        <h2 class="title-text"> {{ this.title}} </h2>
        <h3 class="subtitle-text"> {{ this.subtitle}} </h3>
    </div>

<!----- SKYGLOW ------------------------------------------------------>
    <div v-if="isSkyGlow" class = "process-content">

        <div class= "columns is-multiline ">
             <div class = "column is-half is-offset-one-quarter">
                    <p> I've always been fascinated by the stars, the outer space.
                        Hence, I decided to create a constellation recognition software aimed 
                        to let everyone see the hidden constellation patterns in the ordinary 
                        environments, thus finding the hidden stars around them. </p>
            </div>

            <div class = "column is-full is-offset-1">
                    <img src='@/assets/img/skyglow/stakeholder.png' width =80% height=80% />
            </div>

             <div class = "column is-half is-offset-one-quarter">
                    <p> I want to focus on educating basic astronomical knowledge
                         with a heavy emphasis on motivating appreciation of stars.</p>
            </div>

            <div class = "column is-full">
                    <img src='@/assets/img/skyglow/storyboard1.png' width = 100% />
            </div>

            <div class = "column is-half is-offset-one-quarter">
                    <p> Users take a photo in their everyday environment to 
                        identify the constellation patterns they see, then the 
                        program will evaluate the given coordinates.</p>
            </div>

            <div class = "column is-full">
                    <img src='@/assets/img/skyglow/userflow.png' width = 100% />
            </div>

            <div class = "column is-half is-offset-one-quarter">
                    <p> I wanted a rather simple user flow that is short but still 
                        effective. The app is targeted at learning and inspiring, 
                        hence it also motivates frequent usage by having the 
                        "constellation collection" storage feature.</p>
            </div>

            <div class = "column is-half is-offset-one-quarter">
                    <p> How do I recognize constellation patterns without AI or ML? <br>
                        My first few ideas were all related to either Artificial 
                        Intelligence or Machine Learning, but I wanted to challenge 
                        myself and come up with an efficient Algorithm that recognizes 
                        constellation patterns by basic arithmetics.</p>
            </div>

            <div class = "column is-full">
                    <img src='@/assets/img/skyglow/explainall.png' width = 100% />
            </div>
            
            <div class = "column is-half is-offset-one-quarter">
                    <p>There are 5 core steps of my detection algorithm from when users 
                       first enter data to how the final constellation is being identified.</p> 
            </div>

            <div class = "column is-half is-offset-one-quarter">
                    <img src = "@/assets/img/skyglow/getstar.gif" width=100% >
            </div>

            <div class = "column is-half is-offset-one-quarter">
                    <p> &#9758; <a href = "https://github.com/miatang13/SkyGlow"> GITHUB </a>,  Feel free to download and play! No external modules needed. </p>
            </div>

            <div class = "column is-11">
            </div>

            <div class = "column">
                <div class = "button-wrapper" v-on:click="handleClick">
                    <atomicButton  :content = this.closeMsg />
                </div>
            </div>

        </div>
    </div> 
<!----- SKYGLOW ------------------------------------------------------>

<!----- ZINE --------------------------------------------------------->

    <div v-if="isBC_Zine" class = "process-content">
         <div class= "columns is-multiline ">
            <div class = "column is-full carousel-wrapper">
                <PrintCarousel />
             </div>

            <div class = "column is-full">
                <h3> Snippets of Process </h3>
                 <p>  <a href="https://medium.com/@xinrant/c-studio-project-2-7368c0b96024?source=friends_link&sk=4d38f420b0494596a288fd85ddc4e13c"> &#9758; FULL PROCESS ON MEDIUM  </a>  </p> 
            </div>

            <div class = "column is-3">
                 <img src = "https://miro.medium.com/max/688/1*wiVFfE1QaFKyP9AOCiIO6w.png" width=100%>
            </div>

            <div class = "column is-3">
                 <img src = "https://miro.medium.com/max/690/1*hn4TO_JUXtE5Is8pjvYv-w.png" width=100%>
            </div>

            <div class = "column is-3">
                 <img src = "https://miro.medium.com/max/968/1*e2adZWXNo9iMF2D9gin2iw.png" width=100%>
            </div>

            <div class = "column is-3">
                 <img src = "https://miro.medium.com/max/1034/1*sBdnT-GT1nnRv2i6Yj2H0w.png" width=100%>
            </div>

            <div class = "column is-half">
                 <img src = "https://miro.medium.com/max/1400/1*Y6c92rw3LqBwTIyluHQzPg.png" width=100%>
            </div>

            <div class = "column is-half">
                 <img src = "https://miro.medium.com/max/1400/1*jvwWv2gDFJR8po5bve_N6g.png" width=100%>
            </div>

             <div class = "column is-half is-offset-one-quarter">
                 <img src = "https://miro.medium.com/max/1000/1*m3kiLBfRoXnu5ZAJ3MqppQ.jpeg" width=100%>
            </div>
           
            <div class = "column is-11">
            </div>

            <div class = "column">
                <div class = "button-wrapper" v-on:click="handleClick">
                    <atomicButton  :content = this.closeMsg />
                </div>
            </div>

        </div> <!-- columns div -->
    </div>


<!----- ZINE --------------------------------------------------------->

<!----- POSTER ------------------------------------------------------->
    <div v-if="isBC_Poster" class = "columns is-multiline">

        <div class = "column is-6">
             <img src = "https://miro.medium.com/max/500/1*ILjMoAG8E7VqVG6mu4gKXg.png" width=100%>
        </div>

        <div class = "column is-6">
             <img src = "@/assets/img/poster/Kit-Of-Parts.png" width=100%>
        </div>

        <div class = "column is-half">
             <img src = "https://miro.medium.com/max/700/1*sZr-QYEtxbaD7qUNfAdKsg.jpeg" width=100%>
        </div>

        <div class = "column is-half">
             <img src = "https://miro.medium.com/max/500/1*UarxpACxnXZ9TIoiCTGTkQ.jpeg" width=100%>
        </div>

        <div class = "column is-half">
             <img src = "https://miro.medium.com/max/700/1*6whhEY25RJN2I7z0WhTfpg.png" width=100%>
        </div>

        <div class = "column is-half">
             <img src = "https://miro.medium.com/max/720/1*RH3faIeVXDOH1WOSnou5mA.jpeg" width=100%>
        </div>

        <div class = "column is-full">
             <img src = "@/assets/img/poster/final.png" width=100%>
        </div>

         <div class = "column is-full">
                 <p>  <a href="https://medium.com/@xinrant/c-studio-project-1-372ed1a5fdd0"> &#9758; FULL PROCESS ON MEDIUM  </a>  </p> 
        </div>

        <div class = "column">
            <div class = "button-wrapper" v-on:click="handleClick">
                <atomicButton  :content = this.closeMsg />
            </div>
        </div>

    </div>
<!----- POSTER ------------------------------------------------------->


</div>
</template>

<script>
import atomicButton from './Button.vue'
import PrintCarousel from './PrintCarousel.vue'

export default {
    name: 'processCard',
    components: {
        atomicButton,
        PrintCarousel,
    },
    data: function(){
        return {
            closeMsg: "CLOSE",
        }
    },
    props:{
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        content: {
            type: String,
        },
        method: { 
            type: Function,
        },
    },
    computed: {
        isSkyGlow: function(){
            return this.content == "SkyGlow";
        },
        isBC_Zine: function(){
            return this.content == "BC_Zine";
        },
        isBC_Poster: function(){
            return this.content == "BC_Poster";
        }
    },
    methods: {
        handleClick: function(){
            this.$emit("clicked");
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_colors.scss';

.carousel-wrapper{
    padding-bottom: 2em;
    border-bottom: solid 1px;
}

.processCard{
    border:3px; 
    border-style:solid; 
    border-color:$color-tag-outline; 
    padding: .5em;
}

.process-content{
    padding: 1em;
}

.titles-wrapper{
    padding-top: .5em;
}


.title-text{
     font-family: Uxum-Medium;
}

.subtitle-text{
     font-family: Uxum-Medium;
     font-size:1em;
}

.pullQuote{
    font-family: Uxum-Regular-Italic;
    font-size: 1.2em;
}
</style>