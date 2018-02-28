<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <span v-if="!isLogin" @click="loginIn">登录</span>
        <img v-show="isLogin" src="../assets/portrait.png" alt="">
      </div>

    </div>
    <div class="phrase">
      一起学习Vue-router
    </div>
    <div class="btns">
      <!-- <div class="trans">我的项目</div>
      <div class="trans">我的文档</div> -->
      <router-link class="trans" :to="{name:'Project'}" tag="div">我的项目</router-link>
      <router-link class="trans" :to="{name:'Doc'}" tag="div">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  import cookies  from 'js-cookie'
  export default {
    name: 'home',
    data () {
      return {
        isLogin: !!cookies.get('userName')
      }
    },
    methods: {
      loginIn () {
        this.$router.push({
          name: 'Login'
        })
      }
    },
    created(){
      
    }
  }
</script>
<style>

</style>
