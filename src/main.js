import Vue from 'vue'//引用全局vue实例
import App from './App.vue'//引用App.vue文件的组件
import router from './router'//引入路由router.js文件
import './assets/styles/reset.css'//引入初始化css样式文件
import store from './store/index'//引入模块化之后的vuex文件,将模块都放在store文件夹下,index为入口文件

Vue.config.productionTip = false;

// beforeEach每进入一个路由就进行守卫

// 路由元信息  在全局守卫使用,在router.js中要跳转的页面中配置meta : {login : true}做标识 然后在beforeEach中的to参数获取是否需要登陆标识
router.beforeEach((to, from, next) => {
  // 全局守卫 传递一个函数,里面也是这三个参数
  const needLogin = to.matched.some(item => item.meta && item.meta.login);
  if(needLogin) {
    // 校验 判断路由元信息是否需要登陆标识
    const isLogin = document.cookie.includes('login=true');//判断缓存中是否已经登陆
    if(isLogin){
      // 缓存中有login信息 已经登陆,直接next执行显示页面
      next();
    }else{
      const toLogin = window.confirm('该页面需要登陆后访问,是否登陆???');
      if(toLogin){
        // 判断是否点击确定进入登陆页面
        next('/login')//传递页面路径 跳转到该页面
      }
    }

  }else{
    next();
  }
  console.log('boforeEach')
})

// 一层一层加载完毕 直到加载到组件内部时执行beforeResolve函数
// router.beforeResolve((to,from,next) => {
//   console.log('boforeResolve')
//   next();
// })

// // afterEach所有守卫都执行完执行该函数
// router.afterEach(() => {
//   console.log('afterEach')

// })
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
