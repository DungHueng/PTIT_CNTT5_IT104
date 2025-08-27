import React, { useReducer } from 'react'

interface InputTextProps {
  value: string;
}

type Action = {type: 'colorChange', payload: string}

function reducer(state: InputTextProps, action: Action): InputTextProps {
    switch (action.type) {
        case 'colorChange':
            return { ...state, value: action.payload }
        default:
            return state
    }
}

export default function InputText() {
    const [state, dispatch] = useReducer(reducer, { value: '' })
  return (
    <div>
      <form>
        <h1>{state.value}</h1>
        <input type="text" value={state.value} onChange={e => dispatch({ type: 'colorChange', payload: e.target.value })} />
      </form>
    </div>
  )
}