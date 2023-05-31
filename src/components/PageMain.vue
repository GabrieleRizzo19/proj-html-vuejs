<script>

    import Jumbotron from './Jumbotron.vue';
    import CategoryCards from './CategoryCards.vue';

    export default{
        name: "PageMain",
        components: {
            Jumbotron,
            CategoryCards
        }
    }

</script>

<template>

    <main>
        <div class="main-wrapper">

            <Jumbotron />

            <CategoryCards />
        </div>
    </main>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .main-wrapper{

    }


</style>