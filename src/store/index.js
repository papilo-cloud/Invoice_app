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
    // todos (state) {
    //   return state.todo;
    // },
    getTodos (state) {
      return state.todos
    },
    getFilters (state) {
      return state.todos
    },
    getTodosCount (state, getters) {
      return getters.getTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
  },
  mutations: {
    loadStore() {
			if(localStorage.getItem('store')) {
        try {
            this.replaceState(JSON.parse(localStorage.getItem('store')));
        }
        catch(e) {
            console.log('Could not initialize store', e);
        }
			}
		},
    ADD_NEW(state, payload){
      return state.todos = payload
    },
    DELE_TODO(state, payload) {
      const index = state.todos.findIndex(dos => dos.id === payload)
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO(state, payload){ 
      const index = state.todos.find(dos => dos.id === payload)
      index.status = 'paid'
      
    },
  }, 
  actions: {
    loadDaas(context) {
      return context.commit('ADD_NEW',data)
    },
    toggleTodo(context,payload) {
      return context.commit('TOGGLE_TODO',payload)
    },
    deleteTodo(context, payload) {
      return context.commit('DELE_TODO', payload)
    }
  },
  modules: {
  }
})
