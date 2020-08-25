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
    border-color:$color-tag-outline; 
    padding: .5em;
    width: fit-content;

    &:hover {
        border-style: dashed;
        background-color:$color-primary;
        color:white;
        cursor:pointer;
      }
}

</style>