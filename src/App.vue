<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.el-menu--horizontal .router-link-active {
  background-color: #324157;
  border-bottom: 5px solid #20a0ff;
}

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: .3s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: .3s;
}
.v-leave-to {
  opacity: 0;
}
</style>
