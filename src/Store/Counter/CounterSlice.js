import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        data: [],
    },
    reducers: {
        increment: (state,action) => {
            console.log(action.payload.qty);
            // action.payload.qty=2;
        },
        decrement: (state) => state.data.qty -= 1,
        Cartdata: (state, action) => {
            action.payload.qty = 2;
            if (!state.data.includes(action.payload)) {
                state.data.push(action.payload);
            }
        },
    },
})
export const { increment, decrement, Cartdata } = CounterSlice.actions;
export default CounterSlice.reducer;