<script>

    import { store } from '../data/store';

    export default{
        name: "LearningPossibilitiesSection",
        data(){
            return{
                store
            }
        }
    }

</script>

<template>

    <div class="learning-possibilities-section container">

        <div class="selectors-side">

            <div v-for="(selector, i) in store.learningSectionData" :class="`selector ${(i == store.currentSlide) ? 'selected' : ''}`" @click="store.currentSlide = i">
                <span>{{ selector.indexTitle }}</span>
            </div>


        </div>
        <div class="content-side pos-relative">

            <h2>{{ store.learningSectionData[store.currentSlide].title }}</h2>

            <p>{{ store.learningSectionData[store.currentSlide].text }}</p>

            <ul>
                <li v-for="li in store.learningSectionData[store.currentSlide].listData">{{ li }}</li>
            </ul>

            <img class="pos-absolute" :src="store.learningSectionData[store.currentSlide].img" alt="">

        </div>

    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .learning-possibilities-section{

        height: 700px;
        padding: 5rem 0;
        @include mixins.flex(row, space-between, center);

        .selectors-side{
            width: 30%;
            height: 100%;
            padding: 1rem;

            .selector{
                height: calc(100% / 6);
                border: 1px solid lightgrey;
                padding: 1rem;
                @include mixins.flex(row, flex-start, center);
                color: grey;
                font-weight: bold;
                font-size: 1.2rem;
                font-family: 'Merriweather', 'Serif';


                &:hover{
                    color: var.$primary-color;
                    cursor: pointer;
                }
            }

            .selector.selected{
                border-left: 10px solid var.$primary-color;
                color: var.$primary-color;
                background-color: rgba(211, 211, 211, 0.361);
            }
        }

        .content-side{
            padding: 3rem 2rem;
            width: 75%;
            height: 100%;

            h2{
                font-family: 'Merriweather', 'Serif';
                font-size: 3rem;
                margin-bottom: 2rem;
            }

            p{
                color: grey;
                font-size: 1.2rem;
                line-height: 1.8rem;
                margin-bottom: 3rem;
            }

            li{
                list-style-type: none;
                margin-bottom: 2rem;
                color: grey;
                font-size: 1.2rem;

                &::before{
                    content: "✓ ";
                    color: var.$primary-color;
                }
            }

            img{
                bottom: 0;
                right: 0;
                width: 20%;
            }
        }
    }

</style>