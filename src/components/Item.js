import React from "react";
import Swal from 'sweetalert2'


const Item = ({todo, deleteHandler, completeHandler, updateNameHandler}) => {

    const showModal = async (id,oldTaskName) => {
        const { value: newTaskName } = await Swal.fire({
            input: 'text',
            inputLabel: 'Enter the new task name',
            inputValue : oldTaskName,
        })
        updateNameHandler(id, newTaskName)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {todo.text}</li>
            <button onClick={()=> showModal(todo.id,todo.text)} className="edit-btn">
                <i className="fas fa-edit"/>
            </button>
            <button onClick={()=>{completeHandler(todo.id)}} className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={()=>{deleteHandler(todo.id)}} className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    )
}

export default Item

