import React from 'react'

interface genderSelectProps {
    value: string;
}

type Action = {type: 'genderChange', payload: string}

function reducer(state: genderSelectProps, action: Action): genderSelectProps {
    switch (action.type) {
        case 'genderChange':
            return {...state, value: action.payload}
        default:
            return state
    }
}

export default function InputRadio() {
  const [state, dispatch] = React.useReducer(reducer, {value: ''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'genderChange', payload: event.target.value})
  }

  return (
    <div>
      <form>
        <label>
          <input type="radio" name="gender" value="Nam" onChange={handleChange} />
          Nam
        </label><br />

        <label>
          <input type="radio" name="gender" value="Nữ" onChange={handleChange} />
          Nữ
        </label><br />

        <label>
          <input type="radio" name="gender" value="Khác" onChange={handleChange} />
          Khác
        </label>
        <p>Selected gender: {state.value}</p>
      </form>
    </div>
  )
}
