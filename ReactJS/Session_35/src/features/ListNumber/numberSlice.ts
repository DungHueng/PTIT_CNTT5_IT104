import { createSlice } from "@reduxjs/toolkit"

interface NumberState {
    value: number[]
}

const initState: NumberState = {
    value: []
}
const numberSlice = createSlice({
    name: "number",
    initialState: initState,
    reducers: {
        random: (state) => {
            state.value = [Math.floor(Math.random() * 100)]
        }
    }
})

export const { random } = numberSlice.actions
export default numberSlice.reducer