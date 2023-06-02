<script>

    import FooterTop from './FooterTop.vue';

    export default{
        name: "PageFooter",
        components:{
            FooterTop
        }
    }

</script>

<template>

    <footer>
        <div class="footer-wrapper">

            <FooterTop />

        </div>
    </footer>

</template>

<style lang="scss" scoped>

    .footer-wrapper{
        background-color: #222222;
        color: white;
    }
</style>