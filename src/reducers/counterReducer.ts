import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../types/redux-types";

const initialState: CounterState = {
  value: 0,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
