import { createStore } from "redux"
import { reducer } from "./Reducer"

const initState = {
    id: 1,
    userName: 'Nguyễn Văn Nam',
    gender: 'Nam',
    dateBirth: '20/03/2023',
    address: 'Thanh Xuân, Hà Nội'
};

interface Action {
    type: string;
    payload?: number;
}

function useReducer(state = initState, action: Action){
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(reducer)

export type rootState = ReturnType<typeof store.getState>;

export default store