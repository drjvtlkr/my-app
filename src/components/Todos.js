import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
  const todos = useSelector((state) => state.todos) // Replace "todos" with your actual state slice name
  // Now you can use the "todos" data in your component

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  )
}

export default Todos
