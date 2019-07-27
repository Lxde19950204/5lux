<template>
    <div class="brandDetail">
        <Header :title="title"/>
        <DetailTab :changeStatus="changeStatusHandle" :changeGoodsHandle="changeGoodsHandle"/>
        <List :list="goods"/>
        <Fenlei :types="types" 
        :changeStatus="changeStatusHandle"  
        :changeGoodsHandle="changeGoodsHandle"
        v-if="fenleiStatus" />
    </div>
</template>

<script>
import Header from "../components/header/header_brand"
import DetailTab from "../components/header/detailTab"
import List from './brandDetail/list';
import Fenlei from '../components/header/fenlei'
export default {
    components:{
        Header,DetailTab,List,Fenlei
    },
    data(){
        return{
            title:"",
            goods:[],
            types:[],
            fenleiStatus:false
        }
    },
    created(){
        var type=this.$route.params.type
        this.$axios.get("/5lux/good/brand_detail",{
            params:{
                id: type,
                cata_id: 0
            }
        }).then((res)=>{
            console.log(res)
            this.title=res.brand_name
            this.goods=res.goods_list
            this.types=res.all_cate
        })
    },
    methods:{
        changeStatusHandle(){
            this.fenleiStatus=!this.fenleiStatus
        },
        changeGoodsHandle(goods){
            this.goods=goods
        }
    }
}
</script>

<style>
    .brandDetail{
        position: relative;
    }
</style>
