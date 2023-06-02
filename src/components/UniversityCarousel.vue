<script>

    import { store } from '../data/store';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';


    export default{
    name: "UniversityCarousel",
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
    data(){
        return{
            store
        }
    }
}

</script>

<template>

    <div class="university-carousel container">

    <swiper
        :slidesPerView="4"
        :spaceBetween="50"
        :autoplay="{
            delay:1500
        }"
        :loop="true"
        :modules="modules"
        class="mySwiper"
    >
        <template v-for="n in 2">
            <swiper-slide v-for="img in store.universityCarouselImg">
                <img :src="img" alt="">
            </swiper-slide>
        </template>
        
    
    </swiper>

    </div>

    

</template>

<style lang="scss" scoped>

    .university-carousel{
        padding: 5rem 0;
    }

</style>