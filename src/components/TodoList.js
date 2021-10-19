import React from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../features/todoSlice'

const TodoList = () => {
  const todos = useSelector(selectTodos)
  return (
    <div>
      {todos.map(todo => (
        <div>{todo.todo}</div>
      ))}
    </div>
  )
}

export default TodoList
