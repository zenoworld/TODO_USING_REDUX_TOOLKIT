import { createSlice, nanoid } from '@reduxjs/toolkit'

const savedTodos = localStorage.getItem('todos');
const initialState = {
    todos: savedTodos ? JSON.parse(savedTodos) : []
}

export const todoSlice = createSlice({
    name: 'subhro',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                edit: false
            }

            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },

        enableEdit: (state, action) => {
            state.todos= state.todos.map(todo => ({
                ...todo,
                edit : todo.id == action.payload
            }))
        },

        updateTodo: (state, action) => {
            const {id , newText} = action.payload

            const todo = state.todos.find(todo => todo.id == id)
            if (todo) {
                todo.text = newText
                todo.edit = false
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

export const { addTodo, removeTodo, updateTodo, enableEdit } = todoSlice.actions

export default todoSlice.reducer