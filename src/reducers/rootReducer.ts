import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/redux-types";

const initialState: UserState = {
  name: "",
  email: "",
  age: 0,
};

const rootReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
