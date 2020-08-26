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

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.button-wrapper{
    border:1.5px; 
    border-style:solid; 
    border-color:$color-near-black; 
    //background-color: $color-primary;
    color: $color-near-white;
    padding: .5em;
    width: fit-content;
    border-style: dashed;
    text-align: center;

	background: linear-gradient(-45deg, #ef9dff, #b3a6ff, #cc7eff, #f9b5ff);
	background-size: 400% 400%;
	animation: gradient 3s ease infinite;

    &:hover {
        background:$color-primary;
        border-color: $color-primary;
        color:$color-near-white;
        cursor:pointer;
      }
}

</style>