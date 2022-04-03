import React, {useEffect, useState} from "react";
import './App.css';
import Form, {AddTodoStore} from "./components/Form";
import TodoList from "./components/TodoList";
import Statistiques from "./components/Statistiques";
import {connect} from "react-redux";
import {DELETE_TODO_ACTION, UPDATE_TODO_ACTION} from "./store/todoReducer";
import MenuSpeedDial from "./components/MenuSpeedDial";

const App = ({todos, updateTodo,deleteTodo}) => {

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    })

    return (
        <div className="App">
            <MenuSpeedDial/>
            <Statistiques todos={todos}/>
            <AddTodoStore>
                <Form/>
            </AddTodoStore>
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
    );
}

export const TodoListStore = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch => ({
        updateTodo: todo => dispatch({
            type: UPDATE_TODO_ACTION,
            payload: {...todo}
        }),
        deleteTodo: todo => dispatch({
            type: DELETE_TODO_ACTION,
            payload: {...todo}
        })
    }))
)(App)

export default App;
