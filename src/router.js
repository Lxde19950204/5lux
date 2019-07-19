import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from './views/My.vue'
import Container from './views/container.vue'
Vue.use(Router)

let AboutView=() => import('./views/About.vue')
let Shopview=()=> import('./views/Shop.vue')
let OverseasView =() => import('./views/Overseas.vue')
let StoreView = () => import('./views/Store.vue')
let IndexView = () => import ('./views/overseas/index.vue');
let DetailView = () => import('./views/Detail.vue');
let ListView =()=>import('./views/detail/list.vue');


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
      path:"/overseas",
      name:"overseas",
      redirect:{name:"index"},
      component:OverseasView,
      children:[
        {
          path:"/overseas/index",
          name:"index",
          component:IndexView
        },
        {
          path:"/overseas/items"
        },
        {
          path:"/overseas/countries"
        },
        {
          path:"/overseas/my",
          redirect:{name:'my'}
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
    
  ]
})
