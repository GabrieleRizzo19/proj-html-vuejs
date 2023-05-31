<script>

    import { store } from '../data/store';

    export default{
        name: "CategoryCards",
        data(){
            return{
                store
            }
        }
    }

</script>

<template>

    <div class="category-cards container">

        <div class="card" v-for="card in store.cateogryCardsContent">
            <div class="card-icon">
                <font-awesome-icon :icon="card.icon" />
            </div>
            <div class="card-title">
                {{ card.title}}
            </div>
        </div>

        
    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;

    .category-cards{

        height: 300px;
        @include mixins.flex(row, space-between, center);

        .card{
            height: 200px;
            width: calc(100% / 6 - 2rem);
            background-color: var.$primary-color-light;
            @include mixins.flex(column, center, center);
            border: 1px solid lightgrey;

            .card-icon{
                color: var.$primary-color;
                font-size: 4rem;
            }

            .card-title{
                margin-top: 1.5rem;
                color: black;
                font-family: 'Merriweather', serif;
                font-weight: bold;
            }
        }
    }

</style>