import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'css/buttons.css'
import 'css/task.css'

export const AddTask = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTodo(text))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New todo:
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)} />
      </label>
      <button className="btn-add" type="submit"> Add </button>
    </form>
  )
}