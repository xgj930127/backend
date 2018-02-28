<template>
  <div class="clearFix el-menu--dark">
    <ul class="el-menu menu-horizontal el-menu--dark el-menu--horizontal header-nav" >
      <router-link to="/" class="el-menu-item logo" exact tag="li">
      <img src="../../assets/miaov.png">
    </router-link>
      <router-link :to="{name:'Project'}" class="el-menu-item" tag="li" >
        <i class="fa fa-home"></i>
        我的项目
      </router-link>
      <router-link :to="{name:'Work'}" class="el-menu-item"  tag="li">
        <i class="fa fa-code"></i>
        工作台
      </router-link>
      <router-link :to="{name:'Doc'}" class="el-menu-item" tag="li">
        <i class="fa fa-book"></i>
        文档
      </router-link>
    </ul>
    <div class="user-info-box" v-show="isLogin">
      <div class="el-submenu__title">
        <img src="../../assets/portrait.png">
        <span>{{userName}}</span>
      </div>
      <div class="header-menu">
        <ul class="menu-nav">
          <li class="el-menu-item" @click="loginOut">登出</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
 import cookies  from 'js-cookie'
  export default {
    name: 'Header',
    data () {
      return {
        userName: cookies.get('userName'),
        isLogin: !!cookies.get('userName')
      }
    },
    created(){
      
    },
    methods: {
      loginOut(){
        cookies.remove('userName')
        this.$router.push({
          name: 'Home'
        })
      }
    }
  }
</script>
<style>

</style>
