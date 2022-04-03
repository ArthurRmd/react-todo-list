import React, {useState} from "react";
import Item from "./Item";


const TodoList = ({todos, updateTodo, deleteTodo}) => {

    const getTodoById = id => {
        for (const todo of todos) {
            if (todo.id === id) {
                return todo
            }
        }
    }

    const deleteHandler = id => {
        deleteTodo(getTodoById(id))
    }

    const updateNameHandler = (id, newTaskName) => {
        updateTodo({
            ...getTodoById(id), text: newTaskName
        })
    }

    const completeHandler = id => {
        const todo = getTodoById(id)
        updateTodo({
            ...todo, completed: !todo.completed
        })
    }

    const searchHandler = (e) => {
        setSearch(e.target.value.trim())
    }


    const [search, setSearch] = useState("")
    const [status, setStatus] = useState('all')

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }


    return (
        <div>
            <form action="">
                <input value={search} onChange={searchHandler} placeholder="Search task by name" type="text"
                       className="todo-input"/>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">


                <ul className="todo-list">
                    {todos.filter(todo => {
                        if (search === "") {
                            return true
                        }
                        return todo.text.includes(search)
                    })
                        .filter(todo => {
                            if (status === "all") {
                                return true
                            }
                            if (status === 'completed') {
                                return !todo.completed
                            }
                            return todo.completed

                        })
                        .map((todo) => (
                            <Item key={todo.id} todo={todo} deleteHandler={deleteHandler}
                                  completeHandler={completeHandler} updateNameHandler={updateNameHandler}>
                            </Item>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList