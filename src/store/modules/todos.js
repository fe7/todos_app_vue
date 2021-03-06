import Axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => (state.todos)
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await Axios.get(url.concat('?_limit=10'));
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        console.log(title);
        const response = await Axios.post(url, { title: title, completed: false });
        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await Axios.delete(url.concat('/', id));
        // if failes trycode:  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        // Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
        console.log(updTodo);
        const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        console.log(response.data);
        commit('updateTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
