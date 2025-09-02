import React, { useReducer } from 'react'

interface CounterProps {
 count: number,
 name: string 
}

type Action = { type: 'increment' | 'decrement' }

function reducer(state: CounterProps, action: Action) {
  switch (action.type) {
    case 'increment':
        return { ...state, count: state.count + 1 }
    case 'decrement':
        return { ...state, count: state.count - 1 }
    default:
        return state
  }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0, name: ''})
  return (
    <div>
      <h2>Số đếm: {state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})}>Tăng</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Giảm</button>
    </div>
  )
}