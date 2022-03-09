import React, {useState} from "react";
import Item from "./Item";


const TodoList = ({status, todos, setTodos}) => {

    const deleteHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completeHandler = (id) => {
        console.log(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo
        }))
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const searchHandler = (e) => {
        setSearch(e.target.value.trim())
    }

    const [search,setSearch] = useState("")

    return (
       <div>
           <form action="">
               <input value={search} onChange={searchHandler} placeholder="Search task by name" type="text" className="todo-input"/>
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
                                 completeHandler={completeHandler}>
                           </Item>
                       ))}
               </ul>
           </div>
       </div>
    )
}

export default TodoList