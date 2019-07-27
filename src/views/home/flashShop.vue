<template>

    <div class="flashShop">
        <ul>
            <li v-for="item in flashlist" :key="item.id">
                <routerLink :to="item.target_url.split('com')[1]">
                    <div class="imgWraper">
                        <img :src="item.sales_thumb">
                    <div class="flag"></div>
                    </div>
                    <div class="articalWraper">
                        <div class="info">
                            <p>
                                <span class="name">{{item.sales_title}}</span>
                                <span class="price">{{item.discount_info}}</span>
                            </p>
                            <p>
                                {{item.sales_desc}}
                            </p>
                        </div>
                        <div class="logo">
                            <img :src="item.sales_logo">
                        </div>
                    </div>
                </routerLink>
            </li>
        </ul>
       
    </div>
</template>

<script>
    export default {
        props:["flashlist"]  
    }
</script>

<style lang="scss" scoped>
    .imgWraper{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .articalWraper{
        padding: 0.26rem 0.2rem;
        display: flex;
        justify-content: space-between;
        .info{
            p{
                line-height: 0.28rem;
                color: #999;
                font-size: 14px;
                margin-bottom: 0.14rem;
            }
            .name{
                font-weight: 700;
                color: #333;
                font-size: 14px;
                margin-right: 0.24rem;
            }
            .price{
                font-family: \\9ED1\4F53;
                font-size: 14px;
                color: #f33;
                font-weight: 700;
            }
        }
        img{
            width: 1.2rem;
            height: 0.6rem;
        }
    }
</style>
