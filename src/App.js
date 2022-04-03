import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';
import Statistiques from "./components/Statistiques";
import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    SpeedDial, SpeedDialAction, SpeedDialIcon,
    Toolbar,
    Typography
} from "@mui/material";


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

    const actions = [
        { icon: <i className="fas fa-edit"></i>, name: 'Edit' },
        { icon: <i className="fas fa-check"></i>, name: 'Check' },
        { icon: <i className="fas fa-trash"></i>, name: 'Delete' },
    ];

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
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
            <Statistiques todos={todos}/>
            <Form setStatus={setStatus} setInputText={setInputText} addItem={addItem} inputText={inputText}></Form>
            <TodoList status={status} todos={todos} setTodos={setTodos}></TodoList>
        </div>
    );
}

export default App;
