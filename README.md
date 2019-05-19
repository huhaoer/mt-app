# 导航守卫(钩子函数)

## 全局守卫
- beforeEach()
- beforeResolve()
- afterEach()

## 路由独享守卫
- beforeEnter

## 组件内守卫
- beforeRouteLeave()  当离开这个路径时执行
- beforeRouteEnter()
- beforeRouteUpdate() 当该路径变化更新时执行

### 进入某一个路径时执行顺序
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach
- 当路径发生变化时 执行beforeRouteUpdate
- 当离开这个路径时 执行beforeRouteLeave


# Vuex (组件之间状态管理)

## state
- this.$store.state.xxx 获取state里面的属性
- mapState(['xxx']) 引入mapState 里面传入state里面的属性
- mapState({
    newXXX : (state) => state.xxx
})变量重复用函数接收state,修改里面的值

## getters
- this.$store.getters.xxx 获取getters里面的计算属性
- mapGetters(['xxx']) 引入mapGetters里面的计算属性
- mapGetters({
    newXXX : xxx 
})变量名重复用newXXX : 原来的名字

- getters : {
    func(state,getters){
        return `年龄:${state.name} ${getters.func}`
    }
}可以在getters函数里面传递state参数和getters参数

## mutations (同步执行  改变vuex中的状态state)
mutations : {
    func(state,payload) {
        state.studentList.push(payload)
    }
}
- 同步执行 两种方法
- 1.this.$store.commit('func',tempObj)
- 2.import {mapMutations} from 'vuex'
- ...mapMutations(['func'])
- this.func(tempObj)
- ...mapMutations({newXXX : 原来的名字})对象形式和getters一样


## actions(异步执行 提交一个mutations,通过mutations改变状态)
actions : {
    func({commit},paylaod) {
        setTimeout(() => {
            commit('mutations里面的方法名',payload)
        },1000)
    }
}
- 异步执行 两种方法
- 1.this.$store.dispatch('actions函数名称',tempObj)
- 2.import {mapActions} from 'vuex'
- ...mapActions(['func']) 数组形式
- this.func(tempObj)
- ...mapActionns({newXXX : 原来的名字})对象形式和getters一样

- 执行过程:
                        actions         
--->dispatch异步分发        ---->commit注册mutations函数
vue components                              mutations
            
        render渲染<----  state      <------改变state数据

## modules(根据功能让vuex分块 state放到每一个模块下  getters mutations actions放到全局)
### 获取vuex数据(无namespaced)
#### 直接获取
- 获取state: this.$store.state.modealName.xxx
- 获取getters:this.$store.getters.xxx
- 获取mutations:this.$store.commit('xxx')
- 获取actions:this.$store.dispatch('xxx')
#### 通过map方式获取,但是不能获取到state,除非加上namespaced
- ...mapgetters(['xxx'])
- ...mapMutations(['xxx']) this.xxx()
- ...mapActions(['xxx']) this.xxx()

###获取vuex数据(有namespaced)
#### 直接获取
- 获取state: this.$store.state.modealName.xxx
- 获取getters:this.$store.['moduleName/getters'].xxx
- 获取mutations:this.$store.commit('moduleName/xxx')
- 获取actions:this.$store.dispatch('moduleName/xxx')
#### 通过map方式获取
- ...mapgetters('moduleName',['xxx'])
- ...mapMutations('moduleName',['xxx']) this.xxx()
- ...mapActions('moduleName',['xxx']) this.xxx()