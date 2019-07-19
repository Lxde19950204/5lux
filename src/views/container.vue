<template>
  <div class="container">
  
    <router-view></router-view>
    <div id="nav">
        <router-link to="/">首页</router-link> 
        <router-link to="/shop">商城</router-link>
        <router-link to="/overseas">海外服务</router-link> 
        <router-link to="/store">到店</router-link>
        <router-link to="/my">我的</router-link>
      </div>
  </div>
</template>

<script>

export default {
  
}
</script>
