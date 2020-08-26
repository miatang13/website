<template>
    <div class = "processCard">
    <div class = 'titles-wrapper'>
        <h2 class="title-text"> {{ this.title}} </h2>
        <h3 class="subtitle-text"> {{ this.subtitle}} </h3>
    </div>

<!----- SKYGLOW ------------------------------------------------------>
    <div v-if="isSkyGlow" class = "process-content">

        <div class= "columns is-multiline ">

             <div class = "column is-three-fifths is-offset-one-fifth" style="padding-top:3em;">
                    <h2> 1. Computational Design </h2> 
            </div>

            <div class = "column is-three-fifths is-offset-one-fifth">
                     <img src = "@/assets/img/skyglow/skyglow.gif" width=100% >
                     <p> * Used as the landing page of the application </p> 
                     <p> &#9758; <a href = "https://raw.githubusercontent.com/miatang13/15112TP/master/MAIN/openingCircle.py"> 
                    CODE SNIPPET </a> </p>
            </div> 

             <div class = "column is-three-fifths is-offset-one-fifth">
                    <p> Creating animations through code gives enormous freedom, 
                        and I enjoyed creating animations that either represents 
                        real-world occurrences or allows perfect mechanical 
                        geometries that we will never see in the world. </p>
            </div>
                         
            <div class = "column is-full" style="padding-bottom:3em;">
                     <img src = "@/assets/img/skyglow/skyglow2.gif" width=100% >
            </div> 
              
   
             <div class = "column is-three-fifths is-offset-one-fifth">
               <h2> 2. Constellation Detection </h2> 
            </div>

            <div class = "column is-three-fifths is-offset-one-fifth">
                    <p> I've always been fascinated by the stars, the outer space. 
                        Hence, I decided to create a constellation recognition 
                        software aimed to let everyone see the hidden constellation 
                        patterns in the ordinary environments, thus finding the 
                        hidden stars around them. </p>
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

            <div class = "column is-half is-offset-one-quarter" >
                    <p> &#9758; <a href = "https://github.com/miatang13/SkyGlow"> GITHUB </a>,  Feel free to download and play! No external modules needed. </p>
            </div>

            <div class = "column is-11">
            </div> 

            <div class = "column ">
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

<!----- BC_WEB ------------------------------------------------------->

    <div v-if="isBC_Web" class = "columns is-multiline">
        <div class = "column is-full">
        </div> 

        <div class = "column is-half is-offset-one-quarter">
                <p> This website is dedicated to showcase the designer Brian Collins.
                </p>
        </div>

        <div class = "column is-full carousel-wrapper" >
                <DigitalCarousel />
        </div>

        <div class = "column is-half is-offset-one-quarter" >
                <p> These are the design features of the website. <br> Below
                    are the detail explainations. 
                </p>
        </div>

         <div class = "column is-full" style="border-bottom:solid 1px; padding-bottom:1em;">
        </div> 

        <div class = "column is-three-fifths is-offset-one-fifth" style="padding-top: 3em;">
               <h2> 1. Interactive Map </h2> 
        </div>

        <div class = "column is-8 gif-container">
                <img src = "@/assets/img/website/map.gif" width=100% >
        </div>

        <div class = "column is-4 gif-container">
                <img src = "@/assets/img/website/cursor-over-map.gif" width=100% >
        </div>

        <div class = "column is-half is-offset-one-quarter">
                <p> This map displays the places in the United States where Brian Collins
                    has led design firms or given talks. When hovering over a state 
                    which he has visited, information of who, where, when, why 
                    and the exact location where are shown. 
                </p>
        </div>

        <div class = "column is-three-fifths is-offset-one-fifth" style="padding-top: 3em;">
               <h2> 2. Gradience & Motion </h2> 
        </div>

        <div class = "column is-half">
                <img src = "@/assets/img/website/history.gif" width=100% >
        </div>

        <div class = "column is-half">
                <img src = "@/assets/img/website/why.gif" width=100% >
        </div>

        <div class = "column is-half is-offset-one-quarter">
                <img src = "@/assets/img/website/motion-order.gif" width=100% >
        </div>

        <div class = "column is-half is-offset-one-quarter">
                <p> Presenting information through websites provides us
                    freedom of RGB colors, and more importantly, motion. 
                    My design represents my impression on his work, which is 
                    bold but also detail-oriented. <br> 
                    I want to make sure that my layout is extremely simple, with 
                    the big type delivering his design theories. Furthermore,
                    the layers of motion delivers the clean layout in a way 
                    that adds complexity and intricacy. 
                </p>
        </div>

        <div class = "column is-three-fifths is-offset-one-fifth" style="padding-top: 3em;">
               <h2> 3. Depth </h2> 
        </div>

        <div class = "column is-three-fifths is-offset-one-fifth">
                <img src = "@/assets/img/website/work.gif" width=100% >
        </div>

        <div class = "column is-half is-offset-one-quarter">
                <p> I struggle the most with the page presenting his work. 
                    He has so much beautiful work that I wanted to showcase, but 
                    just like print mediums, we have limited space and time 
                    before the reader loses attention. Hence, I needed to have
                    layers of information that allows both skimming through or 
                    reading closely. 
                </p>
        </div>

        <div class = "column is-half is-offset-one-quarter">
                 <p>  <a href="https://www.designhero-briancollins.info/"> &#9758; SITE LIVE  </a>  </p> 
        </div>

        <div class = "column is-offset-11">
                <div class = "button-wrapper" v-on:click="handleClick">
                    <atomicButton  :content = this.closeMsg />
                </div>
        </div>

    </div> 

<!----- BC_WEB ------------------------------------------------------->

<!----- Iris --------------------------------------------------------->
    <div v-if="isIris" class = "columns is-multiline">

        <div class = "column is-three-fifths is-offset-one-fifth carousel-wrapper" 
             style = "padding-bottom: 2em;">
                <IrisCarousel />
        </div>
        
         <div class = "column is-half is-offset-one-quarter pullQuote">
                <p style="padding-bottom: .5em;"> 
                    IrisRover (previously CubeRover) is the 
                    <span class = 'highlight-text'> World’s first </span>  
                    student-built lunar rover scheduled to land on the Moon in 
                    2021 with $79.5 million NASA funding. 
                </p>

                <p>
                    I am <span class = "highlight-text">1 of the 4 </span> frontend developers on the UI-development team, 
                    creating usable interfaces for mission officers to utilize when
                    our rover lands on the moon. 
                </p>
        </div>

        <div class = "column is-full">
                <img src = "@/assets/img/Iris/Ground-Software-Architecture.jpg" width=100% >
        </div> 

         <div class = "column is-half is-offset-one-quarter">
                <p> 
                    For IrisRover, UI Dev is at the center of Database, 
                    Render processes, Ground Commands, and Rover Data. 
                    Essentially, after we launch the rover, 
                    a working interface determines if we can achieve 
                    our end goal, taking photos of the moon. 
                </p>
        </div>

        <div class = "column is-three-fifths is-offset-one-fifth">
                 <img src = "@/assets/img/Iris/dashboard-design-spec-bg.png" width=100% >
        </div> 
        
        <div class = "column is-half is-offset-one-quarter">
                <p> 
                    The specific interface I have been working on is the Telemetry 
                    interface, where the data we receive from the rover are analyzed
                    and displayed. 
                </p>
        </div>

        <!-- 
        <div class = "column is-3" style="background-color:black;">
                <img src = "@/assets/img/Iris/brush.gif" width=100% >
        </div> 
        --> 
        <div class = "column is-full">
        </div> 

        <div class = "column is-3 is-offset-3" style="background-color:black;">
                <img src = "https://media1.giphy.com/media/hX1837OBH78zSCjfbl/giphy.gif" width=100% >
        </div> 

        <div class = "column is-3" style="background-color:black;">
                <img src = "@/assets/img/Iris/dropdown.gif" width=100% >
        </div> 

        <div class = "column is-half is-offset-one-quarter">
                <p> 
                    * Selected merged components 
                </p>
        </div>

        <div class = "column is-full">
        </div> 

         <div class = "column is-2 is-offset-2">
                 <img src = "@/assets/img/Iris/ErrorLog-Card-Opened.png" width=100% >
        </div>

        <div class = "column is-2 ">
                 <img src = "@/assets/img/Iris/ErrorLog-Card-Search.png" width=100% >
        </div>

        <div class = "column is-2 ">
                 <img src = "@/assets/img/Iris/ErrorLog-Card-Sort.png" width=100% >
        </div>

        <div class = "column is-2 ">
                 <img src = "@/assets/img/Iris/ErrorLog-Card-SortResults.png" width=100% >
        </div>


        <div class = "column is-half is-offset-one-quarter">
                <p> Currently I am busy building this component, the Error Log Filter, where
                    the user can search by key words such as Error Tag, Sensor Name,
                    Mission Time Frame, etc. Furthermore, user can sort the results 
                    by different categories for easier access. 
                </p>
        </div> 

        <div class = "column is-half is-offset-one-quarter pullQuote">
                <p> We are busy merging and will be releasing an interface package 
                    around September. Stay tuned. </p>
        </div>

        <div class = "column is-offset-11">
                <div class = "button-wrapper" v-on:click="handleClick">
                    <atomicButton  :content = this.closeMsg />
                </div>
        </div>

    </div>
<!----- Iris --------------------------------------------------------->

</div>
</template>

<script>
import atomicButton from './Button.vue'
import PrintCarousel from './PrintCarousel.vue'
import DigitalCarousel from './DigitalCarousel.vue'
import IrisCarousel from './IrisCarousel.vue'

export default {
    name: 'processCard',
    components: {
        atomicButton,
        PrintCarousel,
        DigitalCarousel,
        IrisCarousel
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
        },
        isBC_Web: function(){
            return this.content == "BC_Web";
        },
        isIris: function(){
            return this.content == "IrisRover";
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
    //padding-bottom: 2em;
    border-bottom: solid 1px;
    padding: 3em;
    background-color: black;
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

.gif-container{
    background-color: black;
}

.img-wrapper{
    display:flex;
    border:3px; 
    border-style:solid; 
    border-color: $color-primary; 
}

.highlight-text{
    color: $color-primary;
}

</style>