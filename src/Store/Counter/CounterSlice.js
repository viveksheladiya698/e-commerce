import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: {},
        data: [],
    },
    reducers: {
        increment: (state,action) => {
        },
        decrement: (state) => state.data.qty -= 1,
        Cartdata: (state, action) => {
            action.payload.qty = 1;
            if (!state.data.includes(action.payload)) {
                state.data.push(action.payload);
            }
        },
    },
})
export const { increment, decrement, Cartdata } = CounterSlice.actions;
export default CounterSlice.reducer;