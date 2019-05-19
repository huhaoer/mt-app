import Vue from 'vue'
import Vuex from 'vuex'
import student from './student.js'
import learn from './learn.js'

Vue.use(Vuex);//使用vuex  同时会将$store给vue实例对象  通过$store.state获得里面的数据

export default new Vuex.Store({
  modules : {//分模块处理  将每一个组件用到是的数据都放在一个模块里,便于管理
    student : student,//上面Import引入每一个模块,这里再modules里面使用
    learn : learn//使用learn模块
  },
  strict : process.env.NODE_ENV !== 'production',//开启严格模式  在非生产环境下  严格来说state数据变化要在mutations中改变
  state: {
    name : '',
    age : null,
    look : 'nice',
    studentList : []
  },

  // getters相当于计算属性
  getters : {
    person (state,getters) {//接收参数state就是上面state里面的属性 getters就是在这里面的每一个方法
      return state.studentList.map(ele => `姓名:${ele.name} 年龄:${ele.age}`)
    }
  },

  // 使用mutations更改数据,而不是在组件内部通过this.$store.state.xxx更改  执行同步任务
  mutations: {

    // 传递多个参数用对象接收
    // changeStudentList(state,{tempObj,name}) {
    //   // 在该函数里面替代了组件内的this.$store.state.studentList.push(tempObj)这一步  将数据的变化放在这里执行更严格
    //   state.studentList.push(tempObj);
    //   state.name = name;
    // },

    // 传递一个参数  payload负载 接收从组件this.$store.commit('changeStudentList',name)传递的一个参数name
    changeStudentList2(state,payload) {
      state.studentList.push(payload);
      // state.name = name;
    }
  },

  // 先用mutations的任务进行commit,然后在要执行的地方dispatch   异步执行任务
  actions: {
    changeStudentList({commit},payload) {
      setTimeout(() => {
        // 先将mutations改变数据的函数在actions异步执行中commit  然后在组件使用异步操作,this.$store.dispatch('changeStudenList',tempObj)
        // 该函数是在组件内通过this.$store.dispatch('changeStudentList',tempObj)先dispatch分发这个异步函数,名称为changeStudentList,然后传递参数tempObj
        // 其次将传递过来的参数通过commit注册给changeStudentList2函数,然后changeStudentList2函数通过commit找到mutations里面的changeStudentList2函数
        // 最后将changeStudentList2函数异步执行
        commit('changeStudentList2',payload)
      }, 1000);
    }
  }
})
