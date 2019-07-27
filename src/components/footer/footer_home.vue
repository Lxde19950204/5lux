<template>
    <div id="footer">
        <ul class="list">
            <li><router-link to="/home"><i class="iconfont">&#xe61f;</i><span>首页</span></router-link></li>
            <li><router-link to="/shop"><i class="iconfont">&#xe647;</i><span>商城</span></router-link></li>
            <li><router-link to="/overseaservice"><i class="iconfont">&#xe60a;</i><span>海外服务</span></router-link> </li>
            <li><router-link to="/store"><i class="iconfont">&#xe61e;</i><span>到店</span></router-link></li>
            <li><router-link to="/my"><i class="iconfont">&#xe608;</i><span>我的</span></router-link></li>
        </ul> 
      </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/iconfont/iconfont.css';
    #footer{
        position: fixed;
        bottom:0;
        left:0;
        height: 0.98rem;
        width: 100%;
        background: #000;
        ul{
            display:flex;
            li{
                text-align:center;
                flex:1;
                a{
                    color:#888;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span{
                        font-size: 12px;
                    }
                    .iconfont{
                        font-size: 20px;
                    }
                }
                .router-link-exact-active{
                    color:#fff;
                }
            }
        }

    }
</style>
