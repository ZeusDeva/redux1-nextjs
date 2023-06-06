import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += 10;
    },
    decrementByAmount: (state, action) => {
      state.value -= 10;
    },
    reset: (state, action) => {
      state.value = 0;
    },
    input: (state, action) => {
      state.value = Amount;
    },
  },
});

export const actions = counterSlice.actions;
export default counterSlice.reducer;
