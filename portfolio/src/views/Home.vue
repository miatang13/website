<template>
  <div class="home">

    <div class = "columns is-multiline">
      <div class = "column is-8">
          <h1 class = "school-info"> 
              Junior @ Carnegie Mellon University 
          </h1> 

          <div class = "little-section">
                <h1 class = "section-title">  Studies: </h1> 
                <h1>
                  <span class = "caret"> > </span> Communications  Design  <br>  
                  <span class = "caret"> > </span>  Logic & Computation  <br>       
                  <span class = "caret"> > </span>  Computer Science (minor)  

                   <!-- 
                        <a href = "https://design.cmu.edu/">></a>   
                        <a href = "https://www.cmu.edu/dietrich/philosophy/undergraduate/logic-and-computation/index.html"> > </a>
                        
                        <a href = "https://www.cs.cmu.edu/">> </a> 
                    -->
                </h1>
          </div>

        <div class = "little-section">
                  <h1 class = "section-title">  Interest: </h1>
                  <h1>
                         <span class = "caret"> > </span>  Interaction Design <br>
                         <span class = "caret"> > </span>  Creative Prototyping <br>
                         <span class = "caret"> > </span>  UX / Front-End Engineering
                  </h1>
              </div>
        </div>

      <div class = "column is-4">
            <img class = 'img-outline' src = "@/assets/img/me/miatang.png" width=100%>
            <div class = "same-line">
                <img src="https://img.icons8.com/nolan/64/ok-hand.png"/>
            </div>
      </div>

      <div class = "columns is-vcentered">
        <div class = "column is-8 same-line ">
              <img src="https://img.icons8.com/nolan/64/email.png" width=45em/>
              <h1 class = "email"> miatang13@gmail.com </h1> 
        </div>
      </div>

   </div> <!-- columns -->
   </div> <!-- entire -->
</template>

<script>

export default {
  name: 'Home',
  data: function() {
      return {
        currentImgName: "okHand",
        okHand: "https://img.icons8.com/nolan/64/ok-hand.png",
        dinoEgg: "https://img.icons8.com/nolan/64/dinosaur-egg.png",
    }
  },
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/_colors.scss';

.email {
  
}

.school-info{
  padding-bottom: .5em;
}

.caret{
  padding-right: .3em;
}

.little-section{
  padding-bottom: 1em;
}
.section-title{
  padding-bottom: .2em;
  color: $color-primary;
}

.same-line{
  display: flex;
}

.my-portrait{
  cursor: url("https://icons8.com/icon/60hmZtGAAiU5/zombie-hand-thumbs-up"), auto;	
}

.email-wrapper{
  display:flex;
}

/*
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
*/ 

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
