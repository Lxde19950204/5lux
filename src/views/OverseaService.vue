<template>
    <div>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Footer from '../components/footer/footer_oversea';
    export default {
        components:{
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>