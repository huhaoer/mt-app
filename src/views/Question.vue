<template>
    <div class="question">
        问题：{{question}}
        <button @click="handleClick" v-show="questionFlag">下一个问题</button>
    </div>
</template>

<script>
export default {
    // 组件所在路径更新时执行  例如handleClick函数点击没用时,可以用beforeRouteUpdate函数,由于路径变化 可以从to获取要跳转的页面
    // beforeRouteUpdate(to,from,next) {
    //     const id = to.params.id;//用beforeRouteUpdate函数的to中获取要去页面的id值
    //     this.getData(id);
    //     next();
    // },
    mounted() {
        // 生命周期函数  可以获取从academic中传递的id值,用this.$route.params.id获取
        const id = this.$route.params.id;
        this.getData(id);
        
    },
    methods : {
        // 由于还没卸载,组件不会发生变化  所以点击写一个问题的话路径会发生变化,但是不会进行跳转,这时需要用到生命函数beforeRouteUpdate
        handleClick() {
            this.$router.push({
                name : 'question',
                params : {
                    id : this.questionId + 1
                }
            })
        },
        getData(id) {
            // 用findIndex方法,将数组里面的questionId和传递的Id值作比较,相同的话就记录索引
            const index = this.questionList.findIndex(item => {
                return item.questionId === id
            })
            if(index != -1){
                this.question = this.questionList[index].title;
                this.questionId = id;
            }else{
                this.questionFlag = false;
                this.question = '没有更多问题了!'
            }
        }
    },
    data() {
        return {
            questionFlag : true,
            questionId : null,//点击查询的下一个问题的id值
            question : '',//要渲染的问题
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

