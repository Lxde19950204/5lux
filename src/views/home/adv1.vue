<template>
    <div class="adv1">
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <routerLink :to="item.ad_link.split('com')[1]">
                    <img :src="item.ad_code">
                </routerLink>  
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        created(){
            this.$axios.get("/5lux//index/columu_recommend").then((res)=>{
                this.data=res
                
            })
        }
    }
</script>

<style lang="scss" scoped>
    .adv1{
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.06rem;
        ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                width: 3.68rem;
                img{
                    width: 100%;
                    margin-bottom: 0.14rem;
                }
            }
        }

    }
</style>





