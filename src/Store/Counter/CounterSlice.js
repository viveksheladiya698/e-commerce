import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        data: [],
        bill: 0,
    },
    reducers: {
        increment: (state, action) => {
            let data = state.data.find((ele) =>
                ele.id == action.payload
            )
            data.qty += 1
            data.disscountprice = data.disscount * data.qty;
            state.bill = 0;
            state.data.map((ele) => {
                state.bill += ele.disscount * ele.qty;
            })
        },
        decrement: (state, action) => {

            let data = state.data.find((ele) =>
                ele.id == action.payload
            )
            if (data.qty > 0) {
                data.qty -= 1
            }
            else {
                data.qty = 0;
            }
            data.disscountprice = data.disscount * data.qty;
            state.bill = 0;
            state.data.map((ele) => {
                state.bill += ele.disscount * ele.qty;
            })
        },
        Cartdata: (state, action) => {
            action.payload.qty = 1;
            action.payload.disscount = (action.payload.price - (action.payload.price * action.payload.discountPercentage / 100))
            action.payload.disscountprice = action.payload.disscount
            state.bill += action.payload.disscount * action.payload.qty;
            if (!state.data.includes(action.payload)) {
                state.data.push(action.payload);
            }
        },
    },
})
export const { increment, decrement, Cartdata } = CounterSlice.actions;
export default CounterSlice.reducer;