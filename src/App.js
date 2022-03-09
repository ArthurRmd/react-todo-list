import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';
import Statistiques from "./components/Statistiques";

function App() {

    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')

    const saveLocalTodo = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodo = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }

    }
    useEffect(() => {
        getLocalTodo()
    }, [])

    useEffect(() => {
        saveLocalTodo()
    })


    const addItem = () => {
        const newItem = {
            id: uuidv4(),
            text: inputText,
            completed: false,
        }
        setTodos([...todos, newItem])
    }
    return (
        <div className="App">
            <h1>Todo list </h1>
            <Statistiques todos={todos}/>
            <Form setStatus={setStatus} setInputText={setInputText} addItem={addItem} inputText={inputText}></Form>
            <TodoList status={status} todos={todos} setTodos={setTodos}></TodoList>
        </div>
    );
}

export default App;
