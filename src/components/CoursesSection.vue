<script>

    import { store } from '../data/store';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper';

    export default{
        name: "CoursesSection",
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
    }


</script>

<template>

    <div class="courses-section container">

        <div class="text-section">
            <h2>Popular Online Courses</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam et magni similique eius nemo fugit excepturi aliquid veniam maxime totam quod voluptas iste facilis dolore doloribus facere, nisi quos.</p>
        </div>

        <div class="cards-section">
            <swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="card in store.coursesCardData">
                    <div class="card">
                        <div class="card-image">
                            <img :src="card.img" alt="">
                        </div>
                        <div class="card-text">
                            <div class="card-title">
                                <h3>{{ card.title }}</h3>
                                <span :class="`badge ${card.price == 'FREE' ? 'bg-yellow' : 'bg-primary'}`">{{ card.price }}</span>
                            </div>
                            <div class="teacher">{{ card.teacher }}</div>
                            <p>{{ card.text }}</p>
                            <div class="card-tag">
                                <font-awesome-icon icon="fa-solid fa-user" />
                                <span>{{ card.numberTag }}</span>
                                <font-awesome-icon icon="fa-solid fa-tag" />
                                {{ card.categoryTag }}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
            </swiper>
        </div>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .courses-section{

        height: 900px;
        background-image: url('../assets/img/8-courses-background/page-background-img.png');

        .text-section{

            margin-bottom: 4rem;

            h2{
                font-family: 'Merriweather', 'Serif';
                font-size: 3rem;
                text-align: center;
                margin-bottom: 2rem;
            }

            p{
                width: 80%;
                margin: 0 auto;
                font-size: 1.5rem;
                text-align: center;
                color: grey;
            }

        }

        .cards-section{
            height: 550px;
            .mySwiper{
                height: 100%;
            }

            .card{

                border: 1px solid lightgrey;
                background-color: white;

                &:hover{
                    cursor: pointer;
                }
                .card-image{
                    width: 100%;
                    margin-bottom: 1rem;

                    img{
                        width: 100%;
                        display: block;
                    }
                }

                .card-text{
                    padding: 1rem;

                    .card-title{
                        font-family: 'Merriweather', 'Serif';
                        margin-bottom: 1rem;
                        position: relative;

                        .badge{
                            padding: 0.25rem 0.75rem;
                            border-radius: 110px;
                            color: white;
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 12px;
                            font-weight: bold;
                            position: absolute;
                            right: 0;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .bg-yellow{
                            background-color: gold;
                        }

                        .bg-primary{
                            background-color: var.$primary-color;
                        }
                    }

                    .teacher{
                        color: lightgrey;
                        font-weight: bold;
                        margin-bottom: 1.5rem;
                    }

                    p{
                        font-size: 1.2rem;
                        line-height: 2rem;
                        color: grey;
                        margin-bottom: 1.5rem;
                    }

                    .card-tag{
                        color: lightgrey;
                        font-weight: bold;

                        & *{
                            margin-right: 0.5rem;
                        }
                    }
                }
            }
        }
        
    }

</style>