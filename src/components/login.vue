<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" v-model="name" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
      <div class="back-index">
        <router-link  to="/">首页>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import cookies  from 'js-cookie'
  export default {
    name: 'login',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      sendLogin () {
        // 登录成功
        console.log(123)
        cookies.set('userName',this.name)
        this.$router.push('/')
      }
    }
  }
</script>
<style>

</style>
