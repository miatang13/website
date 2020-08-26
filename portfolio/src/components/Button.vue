<template>
    <div class = "b-button">
        <div class = "button-wrapper">
            <span> {{ this.content }} </span>
        </div>
    </div> <!-- big container -->
</template>

<script>
export default {
    name: 'atomicButton',
    props:{
        content: {
            required: true,
        },
        dashed: {
            required: false,
            default: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_colors.scss';

.button-wrapper{
    border:1.5px; 
    border-style:solid; 
    border-color:$color-near-black; 
    background-color: $color-primary;
    color: $color-near-white;
    padding: .5em;
    width: fit-content;
    border-style: dashed;

    &:hover {
        background-color:$color-near-black;
        border-color: $color-primary;
        color:$color-near-white;
        cursor:pointer;
      }
}

</style>