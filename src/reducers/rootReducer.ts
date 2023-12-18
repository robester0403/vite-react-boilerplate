import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../types/redux-types";

const initialState: CounterState = {
  value: 0,
};
