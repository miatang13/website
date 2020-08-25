<template>
  <div class="home">
    <div class = "columns">
      <div class = "column is-8">
            <h1 class = "Bold-Text"> 
            <br> Junior @ Carnegie Mellon University 
            </h1>
            <h1 class = "Bold-Text"> 
                  Studies: <br>
                  <a href = "https://design.cmu.edu/">></a> Communications  Design  <br>            
                  <a href = "https://www.cmu.edu/dietrich/philosophy/undergraduate/logic-and-computation/index.html"> > </a>
                  Logic & Computation  <br>
                  <a href = "https://www.cs.cmu.edu/">> </a>  Computer Science (minor)  
            </h1>
          

            <h1 class = "Bold-Text"> 
                  Interest: <br>
                  > Interaction Design <br>
                  > Creative Prototyping <br>
                  > UX / Front-End Engineering
                  </h1>
                    <div class="about-card1">
                  <div class = 'email-wrapper'>
                  <img src="https://img.icons8.com/nolan/64/easy.png"/>
                  <h1> miatang13@gmail.com </h1>
                  </div>
            </div>
    </div>

    <div class = "column my-portrait" >
        <img src="https://img.icons8.com/nolan/64/ok-hand.png"/>
        <img class = 'img-outline' src = "@/assets/img/me/miatang.png" width=100%>
    </div> 

   </div> <!-- columns -->
   </div> <!-- entire -->
</template>

<script>
import AOS from 'aos'

export default {
  name: 'Home',
  created () {
        AOS.init()
  },
  data: function(){
    return {
    }  
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_colors.scss';

.my-portrait{
  cursor: url("https://icons8.com/icon/60hmZtGAAiU5/zombie-hand-thumbs-up"), auto;	
}

.email-wrapper{
  display:flex;
}

.about-card{
    border:3px; 
    border-style:solid; 
    border-color:$color-tag-outline; 
    padding: .5em;
    width: fit-content;
    height: fit-content;
    max-width: 100%;
    color: $color-primary;

    &:hover {
        border-style: dashed;
        border-color: $color-primary;
         color: $color-tag-outline; 
      }
}

.img-outline{
    border:3px; 
    border-style:solid; 
    border-color:$color-primary; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
