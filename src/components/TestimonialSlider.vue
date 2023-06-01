<script>

    import { store } from '../data/store';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination } from 'swiper';

    export default{
        name: "TestimonialSlider",
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay, Pagination],
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

    <div class="testimonial-slider">

        <swiper
            :spaceBetween="30"
            :pagination="{
                clickable: true,
            }"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="testimonial in store.testimonialInfo">
                <div class="testimonial-slider-content container">

                    <img :src="testimonial.img" :alt="testimonial.name">
                    <p>"{{ testimonial.text }}"</p>
                    <div class="testimonial-name">{{ testimonial.name }}</div>
                    <span>{{ testimonial.role }}</span>


                </div>


            </swiper-slide>
        </swiper>

    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .testimonial-slider{
        
        background-image: url('../assets/img/6-testimonial-slider/h5-parallax-img-1.png');
        background-size: cover;
        text-align: center;
        
        .mySwiper{
            height: 100%;
        }

        .testimonial-slider-content{

            width: 100%;
            padding: 5rem 0;
            text-align: center;
            color: white;

            img{
                width: 110px;
                border-radius: 50%;
                margin-bottom: 2rem;
            }

            p{
                font-size: 1.5rem;
                width: 80%;
                margin: 0 auto;
                margin-bottom: 2rem;
            }

            .testimonial-name{
                font-family: 'Merriweather', 'Serif';
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            span{
                font-weight: bold;
            }

        }
            
    }

</style>