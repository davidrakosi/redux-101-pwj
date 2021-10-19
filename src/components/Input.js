import React, { useState } from 'react'
import { addTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import './Input.css'

import styled from 'styled-components'

const Input = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addNewTodo = () => {
    dispatch(addTodo({ todo: input }))
    setInput('')
  }

  return (
    <div className='inputContainer'>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <RandomText>something</RandomText>
      <button onClick={() => addNewTodo()}>Add Todo</button>
    </div>
  )
}

export default Input

const RandomText = styled.div`
  color: blue;
`
