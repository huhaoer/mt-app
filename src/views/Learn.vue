<template>
    <div class="learn">
        <!-- 直接使用模块中的state,需要再前面加上模块的名字,因为state的数据是自己私有的,getters,mutations,actions才是全局的 -->
        <!-- {{$store.state.learn.course}} -->

        <!--  -->
        {{course}}

        <!-- getters可以直接$store.getters.getPrice调用,因为是全局的 -->
        <!-- {{$store.getters.getPrice}} -->

        {{getPrice}}
        <button @click="handleClick">改变</button>  
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    
    methods : {
        handleClick() {
            // 未使用命名空间时调用mutations
            // this.$store.commit('changePrice',{price: 200})

            // 使用命名空间     mutations在方法名前面加上模块的名字作为路径
                this.$store.commit('learn/changePrice',{price : 500})
        }
    },
    computed : {
        // 使用命名空间     通过mapGetters直接获取getters
        ...mapGetters('learn',['getPrice']),

        // 使用命名空间     通过mapState获取不到state里面的值,因为命名空间的限制,需要在前面加上moduleName模块名字
        ...mapState('learn',['course'])
    }
}
</script>

