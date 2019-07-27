<template>
    <div class="home">
        <div class="swiper">

        </div>
        <div class="hotNav" :style='"background-image:url("+iconbg+")"'>
            <ul class="clear_hot">
                <li class="hot_list" 
                v-for="(item,index) in iconList" :key="index">
                    <routerLink :to="item.ad_link.split('com')[1]" ></routerLink>
                </li>
            </ul>
        </div>
        <Adv1 />
        <Content/>
        
  </div>
</template>

<script>
    import Adv1 from './home/adv1';
    import Content from './home/content'
    
    export default {
        components:{
            Adv1,Content
        },
        data(){
            return{
                iconbg:"",
                iconList:[]
            }
        },
        created(){
            this.$axios.get("/5lux/index/index_button").then((res)=>{ 
                this.iconbg=res.background
                this.iconList=res.list
            })
            
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        margin-bottom: 0.98rem;
        width: 100%;
        background: #f2f2f2;
        overflow: hidden;
    }
    .swiper{
        width: 100%;
        height: 8.25rem;
        background: #c33;   
    }
    .hotNav{
        width: 100%;
        padding-top: 1.5rem;
        background-size: 100%;
        position: relative;
        overflow: hidden;
        .clear_hot{
            width: 100%;
            position: absolute;
            top:0;
            left: 0;
            display: flex;
            height: 1.5rem;
            overflow: hidden;     
        }
        .hot_list{
            flex: 1;
            a{
                display: block;
                width: 100%;
                height: 1.5rem;
            }
        }
    }
</style>
