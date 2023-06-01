<script>

    import Jumbotron from './Jumbotron.vue';
    import CategoryCards from './CategoryCards.vue';
    import InHomeTutoringSection from './InHomeTutoringSection.vue';
    import EmpoweringChildrenSection from './EmpoweringChildrenSection.vue';
    import TestimonialSlider from './TestimonialSlider.vue';
    import LearningPossibilitesSection from './LearningPossibilitesSection.vue';

    export default{
        name: "PageMain",
        components: {
            Jumbotron,
            CategoryCards,
            InHomeTutoringSection,
            EmpoweringChildrenSection,
            TestimonialSlider,
            LearningPossibilitesSection
        }
    }

</script>

<template>

    <main>
        <div class="main-wrapper">

            <Jumbotron />

            <CategoryCards />

            <InHomeTutoringSection />

            <EmpoweringChildrenSection />

            <TestimonialSlider />

            <LearningPossibilitesSection />
        </div>
    </main>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .main-wrapper{

    }


</style>