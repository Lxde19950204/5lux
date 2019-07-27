<template>
    <div class="detailTab">
        <ul class="tab"> 
            <li v-for="(val,index) in tabVal" 
            :class="activeIndex==index?'active':''" 
            :key="index"
            @click="changeActiveIndex(index)" 
            >{{val.name}}</li>
            <div class="sort" v-show="tabVal[0].flag" @click="changeFlag(0)">
                <ul>
                    <li v-for="(item,index) in sortVal" :key="index" @click="changeGoods(item.sort,item.order,index)">{{item.name}}</li>
                </ul>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['changeStatus',"changeGoodsHandle"],
        data(){
            return{
                tabVal:[{name:"综合",flag:false},{name:"分类",flag:false},{name:"筛选",flag:false}],
                activeIndex:0,
                sortVal:[
                    {name:"综合",sort:"add_time"},{name:"销量优先",sort:"salesnum"},
                    {name:"价格由低到高",sort:"product_price",order:"ASC"},{name:"价格由高到低",sort:"product_price",order:"DESC"},
                    {name:"新品优先",sort:"inputtime",order:"DESC"},{name:"人气优先",sort:"super_number",order:"DESC"}
                ]
            }
        },
        methods:{
            changeActiveIndex(index){
                this.activeIndex=index;
                this.tabVal[index].flag=!this.tabVal[index].flag;
                if(index==1){
                    this.changeStatus()
                }
            },
            changeFlag(index){
                this.tabVal[index].flag=!this.tabVal[index].flag;
            },
            changeGoods(sort,order="",index){
                this.tabVal[0].name=this.sortVal[index].name.slice(0,2)
                var type=this.$route.params.type
                this.$axios.get("/5lux/good/brand_detail",{
                    params:{
                        id: type,
                        sort: sort,
                        order:order
                    }
                }).then((res)=>{
                    this.changeGoodsHandle(res.goods_list)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detailTab{
        width: 100%;
        position:fixed;
        top:0.88rem;
        background: #fff;
        .tab{
            width: 100%;
            height: 0.78rem;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            display: flex;
            position: relative;
            >li{
                flex: 1;
                display: inline-block;
                height: 100%;
                line-height: 39px;
                font-family: \\9ED1\4F53;
                font-size: 14px;
                color: #999;
                text-align: center;
            }
            .active{
                color: #9b885f
            }
            .sort{
                position: fixed;
                left: 0;
                top:01.66rem;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.6);
                ul{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0.12rem 0.54rem;
                    background: #fff;
                    li{
                        line-height: 0.72rem;
                        color: #999;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>
