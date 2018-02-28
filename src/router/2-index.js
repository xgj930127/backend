import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'

import Backend from '@/views/layout'
import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Work from '@/views/backend/work'

import Login from '@/components/login'

import cookies from 'js-cookie'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        isLogin: true
      }
    },
    {
      path: '/backend',
      name: 'Backend',
      component: Backend,
      redirect: { name: 'Project' },
      meta: {isLogin:true},
      children: [
        {
          path: 'project',
          name: 'Project',
          component: Project,
          meta: {  // 给路由对象增加额外的数据
            isLogin: true  // 来标识这个路由必须登录才能进
          }
        },
        {
          path: 'doc',
          name: 'Doc',
          component: Doc,
          meta: {  // 给路由对象增加额外的数据
            isLogin: false
          }
        },
        {
          path: 'work',
          name: 'Work',
          component: Work,
          meta: {  // 给路由对象增加额外的数据
            isLogin: true
          }
        }

      ]
    }
  ]
})

// 在全局的导航守卫中，判断某个路由是否需要登录

router.beforeEach((to,from,next) => {
  console.log(to)
  if(to.meta.isLogin){  // 需要登录
    // 判断是是否登录
    let userName = cookies.get('userName');
    /* 
        1. 没有登录，访问login是可以进入
        2. 登录了，访问login跳首页
        3. 
    */
    console.log(userName, to.name)
    // 没有登录，访问的不是登录页 跳到登录页
    if(!userName && to.name !== 'Login'){
      next({
        name: "Login"
      })
      // 登录了，并且访问的是登录页，跳到首页
    } else if (userName && to.name === 'Login'){
      next({
        name:'Home'
      });
    }else{  // 没有登录，访问的是登录页
      next();
    }

  }else{
    next();
  }
  
})


export default router;
