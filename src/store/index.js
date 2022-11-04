import { createStore } from 'vuex'
import data from "../datas/dass.json";

export default createStore({
  state: {
        todos: []
  },
  getters: {
   
    getTodos (state) {
      return state.todos
      console.log(state.todos)
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
    // ADD_NEW(state, payload){
    //   return state.todos = payload
    // },
    // loadDaas(state) {
    //   return state.todos = data
    // },
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
