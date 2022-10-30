import { createStore } from 'vuex'
import data from "../datas/dass.json";

export default createStore({
  state: {
        todos: [],
        todo: [
          { id: 1, text: '...', done: true },
          { id: 2, text: '...', done: true },
          { id: 3, text: '...', done: false },
          { id: 4, text: '...', done: false },
          { id: 7, text: '...', done: true }
        ],
        count: 1,
  },
  getters: {
  
    getTodos (state) {
      return state.todos
    },
    getTodosCount (state, getters) {
      return getters.getTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    activeClass(state) {
      return 
    }
  },
  mutations: {
    increment(state){
      state.count++
    },
    ADD_NEW(state, payload){
      return state.todos = payload
    },
    DELE_ODO(state, payload) {
      const index = state.todos.findIndex(dos => dos.id === payload)
      return state.todos.splice(index, 1)
    }
  }, 
  actions: {
    loadDaas(context) {
      return context.commit('ADD_NEW',data)
    },
    delOdo(context, payload) {
      return context.commit('DELE_ODO', payload)
    }
  },
  modules: {
  }
})
