<script>

    export default{
        name: "ToTopButton",
        methods: {
            scrollToTop(){
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

</script>


<template>


<!-- RENDERLO ANIMATO -->

    <a @click="scrollToTop">
        <span class="top-arrow"><font-awesome-icon icon="fa-solid fa-chevron-up" /></span> <br> 
        TOP
    </a>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/_variables' as var;


    a{
        position: fixed;
        right: 0;
        bottom: 0;
        padding: 1rem;
        border: 0;
        background-color: var.$primary-color;
        color: white;
        font-weight: bold;
        text-align: center;
    }

</style>