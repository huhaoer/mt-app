<template>
  <div class="home">首页</div>
</template>

<script>
import axios from 'axios'//引入axios发送请求
export default {
  // 组件内守卫
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter')
    next()
  },

  // 发送axios请求获取数据,返回的是一个promise对象,用.then进行注册 安装axios  npm install axios
  mounted() {
    // axios.get发送请求 第一个参数请求地址 第二个参数为请求的参数
    axios.get('/api/chat/sendMsg',{
      params : {
        msg : '？？？',
        appkey : 'Layoung_1548596076612'
      }
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
// 引入less样式文件 在任何地方都可以使用,但是很麻烦  可以下载 vue add  style-resources-loader会自动创建一个配置文件在vue.config.js文件中,写入需要在全局使用的变量就行
// @import '../assets/styles/variale.less'; 配置文件中配置该文件,可以不引入直接使用
  div{
    color : @color
  }
</style>




