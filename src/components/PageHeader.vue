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

        <div class="container header-wrapper d-flex justify-content-between align-items-center">

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
                        <a href="">
                            <font-awesome-icon :icon="['fas', 'bag-shopping']" />
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

    .header-wrapper{
        height: 100px;
        color: white;
        background-color: transparent;

        a{
            text-decoration: none;
            color: inherit;

            &:hover{
                color: #40c4ff;
            }
        }
        
    }

</style>