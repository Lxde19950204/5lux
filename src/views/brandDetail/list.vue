<template>
    <div class="list">
        <ul class="goods">
            <li v-for="(item,index) in list" :class="(index%2==0?'ml_list':'mr_list')+' item'" :key="item.good_id" >
                <routerLink :to="'/good/detail/'+item.product_id">
                    <div class="imgWrap"> 
                        <img :src="item.product_img">
                    </div>
                    <div class="infoWrap">
                        <p>{{item.brand_en_name}}</p>
                        <p>{{item.name}}</p>
                        <p><span class="price">￥{{item.product_price}}</span><del>￥{{item.market_price}}</del></p>
                    </div>
                </routerLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["list"]
}
</script>

<style lang="scss" scoped>
    .list{
        margin-top:1.7rem;
        background: #fff;
        overflow: hidden;
        ul{
            li{
                width: 3.73rem;
                height:5.75rem;
                float: left;
                .imgWrap{
                    width: 100%;
                    height: 3.73rem;
                    display: flex;
                    justify-content: center;
                    img{
                        width: 78.5%;
                    }
                }
                .infoWrap{
                    margin: 20px 15px 30px;
                    text-align: center;
                    font-weight: 400;
                    color: #333;
                    .price{
                        color:#9b885f
                    }
                    del{
                        color: #7e8c8d
                    }
                }
            }
            .mr_list{
                margin-left: 0.02rem;
                margin-bottom: 0.02rem;
            }
            .ml_list{
                margin-right: 0.02rem;
                margin-bottom: 0.02rem;
            }
        }
    }
</style>
