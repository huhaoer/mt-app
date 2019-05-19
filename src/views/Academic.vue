<template>
    <ul class="academic">
        <!-- 动态路由 只能使用name方式不能使用 path : '/question'  后面传递参数,会在question路由后面:id接收-->
        <router-link v-for="item in questionList" 
                    :key="item.questionId"
                    :to="{name : 'question',params : {id : item.questionId}}"
                    tag="li"
                    >{{item.title}}
        </router-link>
    </ul>
</template>

<script>
export default {
    // 在路由进来之前执行的函数,例如从personal跳转到academic时  to就是academic的路径 from就是personal路径
    beforeRouteEnter(to,from,next) {
        next(vm => {
            // 在路由进来之前 this时undefined,可以在next中传递参数为函数 获取到实例对象vm
            // console.log(vm)
        })
    },
    data() {
        return {
            questionList: [
                {
                    questionId : 201801,
                    title : '到底什么是es6中的class(类)?怎么实现class(类)?'
                },
                {
                    questionId : 201802,
                    title : '什么是es6中的箭头函数?与普通函数有什么区别?到底该不该使用箭头函数?'
                },
                {
                    questionId : 201803,
                    title : '什么是es6的解构赋值?每次会创建一个对象嘛?会增加GC的负担嘛?'
                }
            ]
        }
    }
}
</script>

<style scoped>
    ul li{
        margin-bottom: 10px;
    }
</style>


