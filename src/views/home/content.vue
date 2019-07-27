<template>
    <div class="content">
        <div class="new_register">
            <routerLink v-if="newregister.ad_link!=undefined" :to="newregister.ad_link.split('com')[1]">
                <img :src="newregister.ad_code">
            </routerLink>
        </div>
        <div class="new_register">
            <routerLink v-if="vipregister[0]!=undefined" :to="vipregister[0].ad_link.split('com')[1]">
                <img :src="vipregister[0].ad_code">
                <ul>
                    <li v-for="(item,index) in vipregister"  v-show="index>0" :key="index">
                        <routerLink v-if="vipregister!=undefined" :to="item.ad_link.split('com')[1]">
                            <img :src="item.ad_code">
                        </routerLink> 
                    </li>
                </ul>
            </routerLink>
        </div>
        <div class="new_register">
            <routerLink  v-if="example.ad_link!=undefined"  :to="example.ad_link.split('com')[1]">
                <img :src="example.ad_code">
            </routerLink>
        </div>    
        <div class="hooksList" v-for="(item,index) in hook_list" :key="index">
            <routerLink :to="item.ads_info.ad_link.split('com')[1]">
                <div class="imgWraper">
                    <span></span>
                    <img :src="item.ads_info.ad_code">
                </div>
                <div class="articalWraper">
                    <strong>{{item.ads_info.ad_name}}</strong>
                    <p>{{item.ads_info.ad_title}}</p>
                </div>
            </routerLink>
            <div class="clearscroll" v-if="item.ads_info.product_info.length>0">
                <ul class="goosWrap">
                    <li v-for="good in item.ads_info.product_info" :key="good.id">
                        <img :src="good.product_thumb">
                        <p class="name">{{good.brand_name}}</p>
                        <p class="price">{{good.ad_subtitle}}</p>
                    </li>
                    <li class="moreList">
                        <img src="../../assets/img/more.jpg">
                    </li>
                </ul>
            </div>
        </div>
        <FlashShop :flashlist="flashList"/>
        <ArticalList/>
    </div>
</template>

<script>
import FlashShop from './flashShop'
import ArticalList from './articalList'

export default {
    components:{
        FlashShop,ArticalList
    },
    data(){
        return{
            newregister:{},
            vipregister:[],
            example:{},
            hook_list:{},
            flashList:{},
        }
    },
    created(){
       
            this.$axios.get("/5lux/index/other_advert").then((res)=>{ 
            
            this.newregister=res.new_register[0]
            this.vipregister=res.vip_member
            this.example=res.five_example.ads_info
            this.hook_list=res.article_list
            this.flashList=res.flash_sales
        })
        
    }
}
</script>

<style  lang="scss" scoped>
    .content{
        width: 100%;
    }
    .new_register{
        width: 100%;
        margin-bottom: 0.2rem;
        background: #fff;
        ul{
            width: 100%;
            box-sizing: border-box;
            display: flex;
            padding: 0.2rem 0.07rem;
            li{
                padding: 0 0.07rem;
            }
            
        }
        img{
            width: 100%;
        }
    }
    .hooksList{
        overflow: hidden;
        background: #fff;
        margin-bottom: 0.2rem;
        .clearscroll{
            width: 100%;
            box-sizing: border-box;
            padding: 0.4rem 0.2rem;
            overflow: hidden;
            ul{
                display: flex;
                overflow: scroll;
                li{
                    width: 2.6rem;
                    height: 3.4rem;
                    padding: 0 10px;
                    flex-shrink: 0;
                    text-align:center;
                    align-items:center;
                    .name{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        width: 100%;
                    }
                    .price{
                        font-family: Aria;
                        font-size: 12px;
                        color: #999;
                        line-height:12px;
                    }
                    img{
                        width: 100%;
                        height: 2.6rem;
                        object-fit: contain;
                    }
                }
                .moreList{
                    padding: 0 0.4rem
                }
            }
        }
        .imgWraper{
            width: 100%;
            position: relative;
            span{
                position: absolute;
                width: 0;
                height: 0;
                overflow: hidden;
                line-height: 0;
                border: 9px solid transparent;
                border-bottom-color: #fff;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
            }
            img{
                width: 100%;
            }
        }
        .articalWraper{
            padding: 0.36rem 0.4rem 0.4rem;
            strong{
                font-size: 14px;
                display: block;
                color:#333;
                height: 0.36rem;
                padding-bottom: 0.36rem;
            }
            p{
                overflow: hidden;
                font-size: 12px;
                color: #999;
                height: 34px;
                line-height: 18px;
            }
        }
        
    }
</style>
