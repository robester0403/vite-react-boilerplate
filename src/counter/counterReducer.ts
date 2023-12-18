import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../types/redux-types";
import { incrementAsync } from "./counterActions";
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
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const { increment, decrement, incrementByAmount } =
  counterReducer.actions;

export default counterReducer.reducer;
