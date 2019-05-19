<template>
    <div class="addStudent">
        <div>添加学生:</div>
        <div>姓名: <input type="text" v-model="name"></div>
        <div>年龄: <input type="text" v-model="age"></div>
        <div><button @click="handleClick">添加</button></div>
        <hr />
    </div>
</template>

<script>
// 使用vuex的mapState  执行时里面传入数组,每一个值就是state里面的属性
import {mapState} from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
    data () {
        return {
            name : '',
            age : null
        }
    },
    methods : {
        ...mapMutations(['changeStudentList']),//引用mapMutations里面的方法
        ...mapActions(['changeStudentList']),
        handleClick() {
            const tempObj = {
                name : this.name,
                age : this.age,
                id : +new Date()//时间戳 转换为毫秒
            }
            // this.$store.state.studentList.push(tempObj)//将本次输入框中的对象信息存入到state中的studentList数组中
            // this.name = ''
            // this.age = ''


            // 使用commit方法   mutations里面的changeStudentList方法执行并传递多个参数  在mutations用{tampObj,name}接收
            // this.$store.commit('changeStudentList',{tempObj,name : 'hehe'})

            // 使用commit方法   mutations里面的changeStudentList方法执行并传递1个参数 在mutations里面用patload接收
            // this.$store.commit('changeStudentList2',tempObj)

            // 使用mapMutations里面的方法
            // this.changeStudentList({tempObj,name : 'huhao'})
            
            // 使用dispatch异步执行函数
            // this.$store.dispatch('changeStudentList',tempObj);

            // 使用mapActions执行异步函数
            this.changeStudentList(tempObj);
        }
    },
    // 使用计算属性 可以实时更新$store.state.name里面的值
    computed : {
        // name () {
        //     return this.$store.state.name
        // },
        // // 在计算属性里面使用mapState传入的属性,...展开每一个都是一个函数,类似于computed里面的函数
        // ...mapState(['age','look']),

        // // 由于state里面的变量和data里面变量重复  那么就更改state里面的变量,用对象形式,前面时改变的名称,后面是一个函数接收参数state是store.js里面的state值
        // ...mapState({
        //     storeName : (state) => state.name 
        // })
    }
}
</script>

<style scoped>
div {
    margin-bottom: 15px;
    }
</style>

