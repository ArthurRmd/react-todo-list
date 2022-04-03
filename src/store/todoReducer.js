import {v4 as uuidv4} from 'uuid';

let initialState = []

if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]))
} else {
    initialState = JSON.parse(localStorage.getItem('todos'))
}

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'

export function todoReducer (state = initialState, action) {

    switch (action.type) {

        case ADD_TODO_ACTION:
            return [...state, {id: uuidv4(), ...action.payload }]

        case UPDATE_TODO_ACTION:
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...action.payload}
                }
                return todo
            })

        case DELETE_TODO_ACTION:
            let newTodo = []
            for (const todo of state) {
                if(todo.id !== action.payload.id) {
                    newTodo.push(todo)
                }
            }
            return newTodo

        default:
            return state
    }


}