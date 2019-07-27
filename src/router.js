import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from './views/My.vue'
import Container from './views/Container.vue'
Vue.use(Router)

let AboutView=() => import('./views/About.vue')
let Shopview=()=> import('./views/Shop.vue')
let OverseasView =() => import('./views/Overseas.vue')
let OverseaServiceView=()=>import('./views/OverseaService.vue')
let StoreView = () => import('./views/Store.vue')
let IndexView = () => import ('./views/overseas/index.vue');
let DetailView = () => import('./views/Detail.vue');
let ListView =()=>import('./views/detail/list.vue');
let BrandView=()=>import('./views/Brand.vue')
let BrandDetailView=()=>import("./views/BrandDetail.vue")
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:"home"},
      component:Container,
      children:[
        {
          path:"/home",
          name:"home",
          component:Home
        },
        {
          path:"/shop",
          name:"shop",
          component:Shopview
        },
        {
          path:'/store',
          name:"store",
          component:StoreView
        },
      ]
    },
    {
      path:"/overseaservice",
      name:"overseaservice",
      redirect:{name:"index"},
      component:OverseaServiceView,
      children:[
        {
          path:"/overseaservice/index",
          name:"index",
          component:IndexView
        },
        {
          path:"/overseaservice/items"
        },
        {
          path:"/overseaservice/countries"
        }
      ]
    },
    {
      path:"/my",
      name:"my",
      component:My
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:"/detail",
      redirect:{name:'list'},
      component:DetailView,
      children:[
        {
          path:'/detail/:type',
          name:'List',
          component:ListView
        }
      ]
    },
    {
        path:"/brand",
        component:BrandView,
    },
    {
        path:"/brand/detail/:type",
        component:BrandDetailView
    },
    {
        path:"/overseas",
        component:OverseasView
    }
  ]
})
