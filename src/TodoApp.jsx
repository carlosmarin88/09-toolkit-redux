import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    // le cambio el nombre
    //const { data: todos = [], isLoading } = useGetTodosQuery() // obtener todos los todos
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading} = useGetTodoByIdQuery(todoId)
    

//    console.log(todo)

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const prevTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>
                Prev Todo
            </button>

            <button onClick={nextTodo}>
                Next Todo
            </button>
{/* para mostrar todos los todos */}
            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE ': 'Pending '}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}

        </>
    )
}
