<script>

    export default{
        name: "LateralButtons"
    }

</script>


<template>

    <div class="lateral-buttons">

        <a>
            <font-awesome-icon icon="fa-solid fa-circle-notch" />
        </a>

        <a>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a>

    </div>


</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as mixins;
    .lateral-buttons{
        
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        
        a{
            display: block;
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
            cursor: pointer;
            @include mixins.flex(row, center, center);
            box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2);
        }

        a:first-child{
            margin-bottom: 0.5rem;
            color: white;
            background-color: #ef2853;
        }

        a:nth-child(2){
            color: #ef2853;
            background-color: white;
        }
    }

    


</style>