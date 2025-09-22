const initState = {
    value: 0
}
type Action = { type: string, payload?: number }

export function reducer(state = initState, action: Action) {
    switch (action.type) {
            case 'INCREMENT':
                return { ...state, value: state.value + 1 }
            default:
                return state
        }
    }