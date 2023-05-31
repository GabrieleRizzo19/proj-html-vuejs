<script>

  // Components import 
  import PageHeader from './components/PageHeader.vue';
  import PageMain from './components/PageMain.vue';
  import PageFooter from './components/PageFooter.vue';


  //Data import
  import { store } from './data/store';


  // Export default
  export default{
    components: { 
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

  <PageHeader :headerLink="store.headerLink" />
  <PageMain />
  <PageFooter />

</template>

<style lang="scss">

  @use './styles/general.scss' as *;

</style>