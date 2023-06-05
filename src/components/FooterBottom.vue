<script>

    import { store } from '../data/store';

    export default{
        name: "FooterTop",
        data(){
            return{
                store
            }
        }
    }

</script>

<template>

    <div class="footer-bottom container">

        <div class="left-side">
            <span>Copyright 2017&#9400; Mikado Themes</span>
        </div>

        <div class="right-side">
            <a :href="store.footerBottomPhoneNumber.href">
                CALL {{ store.footerBottomPhoneNumber.toShow }}
            </a>

            <span>FOLLOW US</span>

            
            <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        </div>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    @use '../styles/partials/_variables' as var;
    .footer-bottom{

        padding: 3rem 0 5rem 0;
        @include mixins.flex(row,space-between);

        .right-side{
            @include mixins.flex(row,space-between);
            gap: 1.5rem;

            a:hover{
                color: var.$primary-color;;
            }
        }
    }

</style>