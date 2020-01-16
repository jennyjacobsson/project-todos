import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const CompletedTask = (props) => {
  const dispatch = useDispatch()
  console.log('complete', props.task.id)

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
            Done
      <input
        type="checkbox"
        checked={props.task.complete}
        onChange={() => dispatch(tasks.actions.toggleCompleted(props.task.id))} />
    </label>
  )
}