<template>
    <div class="studentList">
        <div>学生列表: </div>
        <ul>
            <li v-for="item in studentList" :key="item.id">姓名:{{item.name}}  年龄:{{item.age}}</li>
        </ul>
        <hr />
        <ul>
            <li v-for="(item,index) in person" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex";//引入store.js中state里面的属性
import { mapGetters } from "vuex";//引入store.js中getters中的计算属性
export default {
    computed : {
        ...mapState(['studentList']),
        ...mapGetters(['person'])
    }
}
</script>

<style scoped>
    ul {
        margin-top: 15px;
    }
    li {
        margin-bottom: 15px;
    }
</style>


