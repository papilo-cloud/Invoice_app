import { createStore } from 'vuex'
import data from "../datas/dass.json";

export default createStore({
  state: {
        todos: [],
        todo: [],

  },
  getters: {
  
    doneTodos (state) {
      return state.todos
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
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
