import { createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
    title: string;
    data: number;
}

const initialState: CounterSlice = {
    title: '',
    data: 42
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload;
        },
        decrement: (state, action) => {
            state.data -= action.payload;
        },
    }
});

export const {increment, decrement} = counterSlice.actions;