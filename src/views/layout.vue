<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/" exact>首页</router-link>
      /
      <span :style="{color:'#97a8be'}">{{flag}}</span>
    </div>
     <transition mode="out-in">
       <!--如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染-->
       <!--
         include - 字符串或正则表达式。只有匹配的组件会被缓存。
         exclude - 字符串或正则表达式。任何匹配的组件都不会被缓存。
       -->
      <keep-alive :include='["Project"]'>
        <router-view></router-view>
      </keep-alive>
      
     </transition>
  </div>
</template>

<script>
   import Header from '@/views/backend/header'

  export default {
    data(){
      return {
        flag: ''
      }
    },
    watch: {
      $route:{
        handler(){
          this.flag = this.$route.meta.title
        },
        immediate: true
      }
    },
    beforeRouteEnter(to, from, next){
      next();
    },
    mounted(){
      console.log('执行了一次')
    },
    components: {
      headerNav: Header
    }
  }
</script>
<style>

</style>
