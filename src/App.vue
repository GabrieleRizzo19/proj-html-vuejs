<script>

  // Components import 
  import ToTopButton from './components/ToTopButton.vue';
  import LateralButtons from './components/LateralButtons.vue';
  import PageHeader from './components/PageHeader.vue';
  import PageMain from './components/PageMain.vue';
  import PageFooter from './components/PageFooter.vue';
  


  //Data import
  import { store } from './data/store';


  // Export default
  export default{
    components: { 
      ToTopButton,
      LateralButtons,
      PageHeader,
      PageMain, 
      PageFooter 
    },
    data(){
      return{
        store
      }
    }

}

</script>


<template>

  <ToTopButton />
  <LateralButtons />
  <PageHeader :headerLink="store.headerLink" />
  <PageMain />
  <PageFooter />

</template>

<style lang="scss">

  @use './styles/general.scss' as *;

</style>