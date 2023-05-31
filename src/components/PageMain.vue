<script>

    import Jumbotron from './Jumbotron.vue';

    export default{
        name: "PageMain",
        components: {
        Jumbotron
        }
    }

</script>

<template>

    <main>
        <div class="main-wrapper">
            <Jumbotron />
        </div>
    </main>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .main-wrapper{

    }


</style>