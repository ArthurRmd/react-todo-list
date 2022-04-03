import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import {ADD_TODO_ACTION} from "../store/todoReducer";


const Form = ({addItem}) => {

    const [inputText, setInputText] = useState("")

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        addItem({
            id: uuidv4(),
            text: inputText,
            completed: false,
        })
        setInputText('')
    }

    return (
        <form>
            <input placeholder="Add new task" value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"/>
            </button>
        </form>
    )

}

export const AddTodoStore = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch => ({
        addItem: todo => dispatch({
            type: ADD_TODO_ACTION,
            payload: {...todo}
        }),

    }))
)(Form)

export default Form