export default {
    namespaced : true,//使用命名空间,让模块的state,getters,mutations,actions通过map函数获取时都要加上模块的名字
    state : {
        course : '数据结构',
        price : 100
    },
    getters : {
        getPrice (state) {
            return '￥' + state.price;
        }
    },
    mutations : {
        changePrice (state,{price}) {
            state.price = price;
        }
    }
}