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
        <div class="header-wrapper container">

            <img id="header-logo" src="../assets/img/1-header/logo-light.png" alt="LOGO HEADER">

            <nav>
                <ul>
                    <li v-for="link in headerLink">
                        <a :href="link.href">{{ link.title }}</a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </a>
                    </li>
                    <li>
                        <a class="pos-relative" href="#">
                            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                            <span class="cart-badge pos-absolute">0</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;
    
    .header-wrapper{
        height: 100px;
        @include mixins.flex(row, space-between, center);

        #header-logo{
            height: 40%;
        }

        nav{
            ul{
                list-style-type: none;
                @include mixins.flex(row, space-between, center);
                gap: 1.5rem;
                
                a{
                    text-decoration: none;
                    color: inherit;
                    font-weight: 600;

                    .cart-badge{
                        display: inline-block;
                        width: 1rem;
                        height: 1rem;
                        line-height: 1rem;
                        font-size: 12px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: var.$primary-color;
                        top: -50%;
                        right: -50%;
                    }

                    &:hover{
                        color: var.$primary-color;

                        .cart-badge{
                            color: white;
                        }
                    }
                }

                
            }
        }
    }

</style>