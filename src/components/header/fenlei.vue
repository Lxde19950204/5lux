<template>
    <div class="fenlei">
        <div class="content">
            <header>分类</header>
            <div class="typeWrap" @click="changeStatus()">
                <div class="type">
                    <ul>
                        <li v-for="(item,index) in types">
                            <div class="typename">{{item.pname}}</div>
                            <ul class="types">
                                <li v-for="(val,index) in item.children_name" @click="changeGoods(item.children[index])">{{val}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['types','changeStatus',"changeGoodsHandle"],
        methods:{
            changeGoods(id){
                var type=this.$route.params.type
                this.$axios.get("/5lux/good/brand_detail",{
                    params:{
                        id: type,
                        cata_id: id
                    }
                }).then((res)=>{
                    console.log(res)
                    this.changeGoodsHandle(res.goods_list)  
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fenlei{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        background: #f2f2f2;
        .content{
            position: fixed;
            width: 100%;
            left: 0;
            top:0;
            background: #fff;
            header{
                text-align: center;
                width:100%;
                height: 0.88rem;
                font-family: \\9ED1\4F53;
                height: 0.88rem;
                line-height: 0.88rem;
                font-size: 16px;
                font-weight: 400;
                background: #fff;
                position: fixed;
                top: 0;
                left: 0;
            }
            .typeWrap{
                width: 100%;
                position: fixed;
                top:0.88rem;
                background: rgba(0,0,0,.6);
                z-index: 6;
                overflow: scroll;
                height: 100%;
                .type{
                    width: 90%;
                    float: right;
                    background: #fff;
                    .typename{
                        padding-left: 0.2rem;
                        height: 0.78rem;
                        background: #f2f2f2;
                        line-height: 0.78rem;
                        font-family: \\9ED1\4F53;
                        font-size: 13px;
                        color: #333;
                    }
                    .types{
                        display: flex;
                        padding-left: 0.2rem;
                        flex-wrap: wrap;
                        li{
                            width: 33.33%;
                            height: 0.78rem;
                            flex-shrink: 0;
                            line-height: 0.78rem;
                        }
                    }
                }
            }
        }
    }
</style>
