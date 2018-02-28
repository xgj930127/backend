import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'

import Backend from '@/views/layout'

// import Project from '@/views/backend/project'
const Project = () => import(/* webpackChunkName: "group-foo" */ '@/views/backend/project');
//import Work from '@/views/backend/work'
const Work = () => import(/* webpackChunkName: "group-foo" */  '@/views/backend/work');
//import Doc from '@/views/backend/doc'
const Doc = () => import('@/views/backend/doc');


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
          meta: {title: '我的项目'}
        },
        {
          path: 'doc',
          name: 'Doc',
          component: Doc,
          meta: { title: '文档' }
        },
        {
          path: 'work',
          name: 'Work',
          component: Work,
          meta: { title: '工作台' }
        }

      ]
    }
  ]
})

// 在全局的导航守卫中，判断某个路由是否需要登录

router.beforeEach((to,from,next) => {
  //console.log(to)

  //to.matched // 里面存放的多层路由的信息对象  [{},{}]

  // 只要有一个需要登录，就判断是否登录
  if (to.matched.some(item => item.meta.isLogin)){  // 需要登录
    // 判断是是否登录
    let userName = cookies.get('userName');
    /* 
        1. 没有登录，访问login是可以进入
        2. 登录了，访问login跳首页
        
    */
    //console.log(userName, to.name)
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
