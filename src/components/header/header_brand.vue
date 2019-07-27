<template>
    <div class="header">
        <span class="back" @click="goback"></span>
        <div class="title">
			{{title}}
        </div>
    </div>
</template>

<script>
    export default {
        props:["title"],
        methods:{
            goback(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width:100%;
        height: 0.88rem;
        position: fixed;
        left: 0;
        top:0;
        background: #fff;
        span{
            position: absolute;
            padding: 0.22rem 0.3rem;
            height: 0.44rem;
            width: 0.44rem;
            left: 0;
            top: 0;
            background: url("../../assets/img/backWhite.png") no-repeat;
            background-size: 0.44rem 0.44rem;
            background-position:0.3rem 0.22rem;
        }
        .title{
            width: 100%;
            text-align: center;
            font-family: \\9ED1\4F53;
            height: 44px;
            line-height: 44px;
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>
