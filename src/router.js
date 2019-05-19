import Vue from 'vue';
import Router from 'vue-router';//导入Router
import Home from './views/Home.vue'//引入views文件夹下的Home组件作为主页

Vue.use(Router);//使用路由

export default new Router({
  mode : 'history',//设置路径为/不是#
  linkExactActiveClass: 'exact-active',//设置点击的组件路径和路由组件设置的路径完全匹配时显示的类名linkExactActiveClass,这里配置修改为exact-active
  linkActiveClass: 'active',//当前点击的路径和包含的路径都会添加linkActiveClass类名 这里配置为active
  routes : [
    // 配置path : '/',当页面加载进来时首先跳转到/home页面  直接配置方式
    // {
    //   path : '/',
    //   redirect : '/home'
    // },
    {
      path : '/home',
      name : 'home',
      component : Home,//显示的第一页,直接加载组件显示
      // beforeEnter(to,from,next) {
      //   // 路由独享守卫 给该路径添加守卫,没有next()执行的话 就不能点击该路径
      //   console.log('beforeEnter')
      //   next();
      // }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn.vue')//后面的组件不会第一时间显示到页面,使用懒加载 等用到他的时候采取引入组件
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue'),
      meta : {//路由元信息  储存路由标识,表明该路由路径需要登陆后才能访问
        login : true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue'),
      redirect: '/community/academic',//会在进入到community时,默认重定向到/community/academic学术讨论页面页面而不是空白
      // 嵌套路由(子路由),在前一个路由组件的基础上写在children数组里
      meta : {
        login : true
      },
      children : [
        {
          path: 'academic',//在子路由children里面 可以直接写路由名字就行了  不用全写/community/academic
          name : 'academic',
          component : () => import('./views/Academic.vue')//页面组件即写在路径的组件都放在views里面,路由组件(Hemo等)页面引入的其他组件放在components里面
        },
        {
          path : 'download',
          name : 'download',
          component : () => import('./views/Download.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal.vue')
        }
      ]
    },
    { //在路径后面传递:id  动态路由  将router-link获取的id值传入到这里
      path: '/question:id',
      name : 'question',
      component: () => import('./views/Question.vue')
    },
    {
      path : '/login',
      name : 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path : '/notFound',
      name : 'notFound',
      component : () => import('./views/Notfound.vue')
    },
    // 配置path : '/',函数配置方式  path : '*'是匹配上面没有的路径  当前进来页面是'/'路径的话就跳转到'/home'路径
    {
      path : '*',
      redirect (to) {
        if(to.path === '/'){
          return '/home'
        }else{
          return '/notFound';
        }
      }
    }
  ]
})