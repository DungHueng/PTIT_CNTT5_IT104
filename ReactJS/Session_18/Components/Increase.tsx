import React from 'react'
import { useReducer } from 'react'

interface State {
    count: number
}

type Action = { type: 'increase' }

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + 1 }
        default:
            return state
    }
}

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, { count: 0})

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
    </div>
  )
}