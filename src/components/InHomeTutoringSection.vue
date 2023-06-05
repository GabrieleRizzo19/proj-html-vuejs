<script>

    export default{
        name: "InHomeTutoringSection"
    }

</script>

<template>

    <div class="in-home-tutoring container">

        <div class="text-section">

            <h2>The Trusted Name <br> for In-Home Tutoring.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores debitis, dolor impedit laboriosam rerum recusandae velit omnis voluptatum porro tempore, asperiores ducimus optio id inventore minus magni molestiae nam?</p>
            <a href="#">LEARN MORE</a>

        </div>

        <div class="image-section">

            <img src="../assets/img/4-in-home-tutoring-section/h5-img-1.jpg" alt="in home tutoring image">

        </div>

        
    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .in-home-tutoring{

        .text-section{


            h2{
                font-family: 'Merriweather', 'Serif';
                width: 50%;
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            p{
                font-size: 1.3rem;
                line-height: 2rem;
                color: grey;
                margin-bottom: 1rem;
            }

            a{
                color: var.$primary-color;
                font-weight: bold;

                &:hover{
                    text-decoration: underline;
                }
            }

        }

        
    }

</style>