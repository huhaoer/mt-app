<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="handleClick">@layoung</div>
      <ul class="nav">
        <!-- 路由配置完成时,在App.vue里面使用router-link可以跳转到路由中设置的路径对应的component  tag用于改变当前a标签为自己的标签 -->
      <router-link tag="li" to="/home">Home</router-link> |
      <router-link tag="li" to="/learn">Learn</router-link>|
      <router-link tag="li" to="/student">Student</router-link>|
      <router-link tag="li" to="/about">About</router-link>|
      <router-link tag="li" to="/community">Community</router-link>
      </ul>
    </div>

    <!-- router-view是显示上面的路径组件的内容 -->
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
    methods : {
      handleClick() {
        // Vue.use(Router);//使用路由时传递$router是一些函数 $route是一些属性在Vue实例上
        this.$router.push('/home')//[a,b,c,d] -> [a,b,c,d,e]添加一个任务栈,返回时返回上一个任务
        // this.$router.replace('/home')//[a,b,c,d] -> [a,v,c,e]直接将d任务替换掉,无法回到上一个页面
        // this.$router.go(-1)//传递数字 返回到点击的签进或者后退的数量的页面,一般不使用
      }
    }
}
</script>


<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  color: #fff;
}
.logo{
  cursor: pointer;
}
.nav{
  display: flex;
}
.nav li{
  margin: 0 20px;
  cursor: pointer;
}
.view{
  padding: 50px 200px;
}
/* 给active包含路径的路由添加样式,在点击社区时候,会出现社区下面的学术页面,而且包含社区,可以用active来显示社区的点击样式 */
.active{
  font-weight: bolder;
}
</style>
