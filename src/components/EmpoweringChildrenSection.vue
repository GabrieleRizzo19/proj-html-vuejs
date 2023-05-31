<script>

    export default{
        name: "EmpoweringChildrenSection"
    }

</script>

<template>

    <div class="empowering-children-section container">

        <div class="image-section">
            <img src="../assets/img/4-empowering-children-section/h5-img-2.jpg" alt="">
        </div>

        <div class="text-section">

            <h2>
                Empowering <br>
                Children to Reach <br>
                Their Potential.
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam</p>

            <div class="counter-container">

                <div class="counter">
                    <h3>168</h3>
                    <span>User Stories</span>
                </div>

                <div class="counter">
                    <h3>347</h3>
                    <span>Events</span>
                </div>

            </div>



        </div>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .empowering-children-section{
        @include mixins.flex(row, space-between, center);

        padding-top: 5rem;

        .image-section{
            width: 50%;

            img{
                width: 100%;
                display: block;
            }
        }

        .text-section{
            width: 50%;

            h2{
                font-family: 'Merriweather', 'Serif';
                width: 100%;
                font-size: 3rem;
                margin-bottom: 1rem;
                text-align: left;
            }

            p{
                font-size: 1.2rem;
                line-height: 1.5rem;
                color: grey;
                margin-bottom: 1rem;
            }

            .counter-container{
                @include mixins.flex(row, space-between, center );
                color: var.$primary-color;
                font-family: 'Merriweather', 'Serif';

                .counter{
                    width: 50%;

                    h3{
                        font-size: 3rem;
                    }

                    span{
                        font-weight: bold;
                    }
                }
            }
        }
    }

</style>