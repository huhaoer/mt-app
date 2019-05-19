export default {
    state: {
        name: '',
        age: null,
        look: 'nice',
        studentList: []
    },
    getters: {
        person(state, getters) {//接收参数state就是上面state里面的属性 getters就是在这里面的每一个方法
            return state.studentList.map(ele => `姓名:${ele.name} 年龄:${ele.age}`)
        }
    },
    mutations: {
        changeStudentList2(state, payload) {
            state.studentList.push(payload);
        }
    },
    actions: {
        changeStudentList({ commit }, payload) {
            setTimeout(() => {
                commit('changeStudentList2', payload)
            }, 1000);
        }
    }
}