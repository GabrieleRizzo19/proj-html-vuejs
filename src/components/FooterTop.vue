<script>

    import { store } from '../data/store';

    export default{
        name:"FooterTop",
        data(){
            return{
                store
            }
        }
    }

</script>

<template>

    <div class="footer-top container">
        
        <div class="column">
            <div class="title">
                <img src="../assets/img/12-footer/footer-logo-1.png" alt="">
            </div>
            <div class="content">
                <p>
                    Providing Life Changing <br>
                    Experiences Trough <br>
                    Education. Class That Fit Your <br>
                    Busy Life. Closer to Home
                </p>

                <span class="d-block font-bold tel">
                    <a href="tel:167712444227">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        &nbsp; 1-677-124-44227
                    </a>
                </span>
                

                <span class="d-block font-bold">
                    <font-awesome-icon icon="fa-regular fa-clock" />
                    &nbsp; Mon - Sat 8.00 - 18.00
                </span>
            </div>
        </div>
        <div class="column">
            <div class="title">Popular Courses</div>
            <div class="content">
                <span v-for="course in store.footerPopularCourses" class="course d-block">
                    <div class="name font-bold"><a :href="course.href">{{ course.name }}</a> </div>
                    <div class="teacher">{{ course.teacher }}</div>
                </span>
            </div>
        </div>
        <div class="column">
            <div class="title">Support</div>
            <div class="content">
                <span v-for="link in store.footerSupportLink" class="support-link d-block">
                    <a :href="link.href">{{ link.name }}</a>
                </span>
            </div>
        </div>
        <div class="column">
            <div class="title">Flexible Learning</div>
            <div class="content">
                <img src="../assets/img/12-footer/footer-img-1.png" alt="">
            </div>
        </div>

    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;


    .footer-top{
        
        @include mixins.flex(row, space-between, center);
        padding: 3rem 0;

        .column{

            height: 300px;
            .title{
                font-size: 1.8rem;
                font-weight: bold;
                font-family: 'Merriweather', 'Serif';
                margin-bottom: 2rem;

                img{
                    height: 2.2rem;
                }
            }

            .content{


                p{
                    font-size: 1.2rem;
                    line-height: 2rem;
                    margin-bottom: 2rem;
                }

                span{
                    margin-bottom: 1.5rem;
                    
                }

                .course:hover , .tel:hover , .support-link:hover{
                    color: var.$primary-color;
                    cursor: pointer;
                }
                    

                .course{
                    .name{
                        font-family: 'Merriweather', 'Serif';
                        font-size: 1.2rem;
                        margin-bottom: 0.5rem;

                    }
                }

                .support-link{
                    font-size: 1.2rem;
                }

            }


        }

        .column:last-child{
            width: 30%;
            text-align: right;

            img{
                    width: 80%;
                }
        }
    }

</style>