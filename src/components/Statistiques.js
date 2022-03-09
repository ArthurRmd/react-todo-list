import React from "react";


const Statistiques = ({todos}) => {

    return (
        <div>
            <div>
                <h3>Number total task : {todos.length}</h3>
                <h3>Number completed task : {todos.filter(todo => todo.completed).length}</h3>
                <h3>Number completed task : {todos.filter(todo => !todo.completed).length}</h3>
            </div>
        </div>
    )
}

export default Statistiques