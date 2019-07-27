<template>
  <div class="container" >
  
    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/footer/footer_home";
export default {
    components:{
        Footer
    }
}
</script>

<style>
    .container{
        width: 100%;
    }
</style>

