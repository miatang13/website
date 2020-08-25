<template>
    <div class = "workTag">
        <div class = "tag-wrapper">
            <span> {{ this.content }} </span>
        </div>
    </div> <!-- big container -->
</template>

<script>
export default {
    name: 'workTag',
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

.tag-wrapper{
    border:1.5px; 
    border-style:solid; 
    border-color:$color-tag-outline; 
    padding: .5em;
    width: fit-content;
}

</style>