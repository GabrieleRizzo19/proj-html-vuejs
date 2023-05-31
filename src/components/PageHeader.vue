<script>

    export default{
        name: "PageHeader",
        props: {
            headerLink: Object
        }
    }

</script>

<template>

    <header>

        <div class="header-wrapper container d-flex justify-content-between align-items-center">

            <img class="h-50" src="../assets/img/1. header/logo-light.png" alt="LOGO HEADER">

            <div>

                <ul class=" d-flex gap-4 list-unstyled m-0">
                    <template v-for="link in headerLink">
                        <li><a :href="link.href">{{ link.title }}</a></li>
                    </template>
                    <li>
                        <a href="">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </a>
                    </li>
                    <li>
                        <a class=" position-relative" href="">
                            <font-awesome-icon :icon="['fas', 'bag-shopping']" />
                            <span class="cart-badge position-absolute d-inline-block">0</span>
                        </a>
                    </li><li>
                        <a href="">
                            <font-awesome-icon :icon="['fas', 'bars']" />
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as var;

    .header-wrapper{
        height: 100px;
        color: white;
        background-color: transparent;

        a{
            text-decoration: none;
            color: inherit;
            font-weight: bold;

            &:hover{
                color: var.$my-primary;

                .cart-badge{
                    color: white;
                }
            }
        }

        .cart-badge{
            background-color: var.$my-primary;
            height: 1rem;
            width: 1rem;
            line-height: 1rem;
            font-size: 12px;
            text-align: center;
            border-radius: 50%;
            right: -50%;
            top: -50%;

        }
        
    }

</style>