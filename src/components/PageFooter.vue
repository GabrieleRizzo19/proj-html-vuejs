<script>

    import FooterTop from './FooterTop.vue';
    import FooterBottom from './FooterBottom.vue';

    export default{
        name: "PageFooter",
        components:{
            FooterTop,
            FooterBottom
        }
    }

</script>

<template>

    <footer>
        <div class="footer-wrapper">

            <FooterTop />

            <FooterBottom />

        </div>
    </footer>

</template>

<style lang="scss" scoped>

    .footer-wrapper{
        background-color: #222222;
        color: white;
    }
</style>