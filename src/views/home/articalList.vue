<template>
    <div class="goodList" v-scroll=''>
        <div class="hooksList" v-for="(item,index) in list" :key="index" >
            <routerLink :to="item.ad_link.split('com')[1]">
                <div class="imgWraper">
                    <span></span>
                    <img :src="item.ad_code">
                </div>
                <div class="articalWraper">
                    <strong>{{item.ad_name}}</strong>
                    <p>{{item.ad_title}}</p>
                </div>
            </routerLink>
            <div class="clearscroll" v-if="item.product_info.length>0">
                <ul class="goosWrap">
                    <li v-for="good in item.product_info" :key="good.id">
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            page:1
        }
    },
    created(){
        this.getListAwait();
        
    },
    methods:{
        getList(page){
             return this.$axios.get("/5lux/index/article_list_ads",{
                 params:{
                     page:page
                 }
             })
        },
        async getListAwait(){
            var data=await this.getList(this.page)
            this.list=this.list.concat(data.ads_info)
            this.page=data.next_page
        },
        
    },
    directives: {
        scroll: {
            // 指令的定义
            inserted: function (el,binding,vnode,oldVnode) {
                
            }
        }

    }
}
</script>

<style lang="scss" scoped>
    .goodList{
        overflow: hidden;
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
