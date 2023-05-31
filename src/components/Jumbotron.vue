<script>

    import { store } from '../data/store';

    // SWIPER

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles




    // import required modules
    import { Pagination } from 'swiper';

    export default {
        name: "Jumbotron",
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Pagination],
            };
        },
        data(){
            return{
                store
            }
        }
    };

</script>


<template>

    <div class="jumbotron pos-relative">
        <div class="background-image pos-absolute">
        </div>

            <swiper
                :spaceBetween="30"
                :pagination="{
                    clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="slide in store.jumbotronSlides">
                    <div class="jumbotron-content container">
                        <h1>{{ slide.title }}</h1>
                        <p>{{ slide.text }}</p>
                        <button>{{ slide.buttonText}}</button>
                    </div>
                </swiper-slide>
            </swiper>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .jumbotron{

        height: 700px;
        margin-top: -100px;
        .background-image{
            height: 700px;
            width: 100%;
            background-image: url('../assets/img/2-jumbotron-slider-img/course-9-f-img.jpg');
            background-size: cover;
            filter: opacity(50%);
            top: 0;
            left: 0;
            z-index: -1;
        }

        .mySwiper{
            height: 100%;
        }
        .jumbotron-content{
            height: 100%;
            width: 80%;
            @include mixins.flex(column, center, center);
            text-align: center;

            h1{
                font-family: 'Merriweather', serif;
                font-size: 4rem;
                margin-bottom: 1rem;
            }

            p{
                line-height: 1.5rem;
                margin-bottom: 3rem;
            }

            button{
                padding: 1rem 2rem;
                background-color: var.$primary-color;
                border: none;
                color: white;
                font-weight: 600;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

</style>