import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/redux-types";

const initialState: UserState = {
  name: "",
  email: "",
  age: 0,
};

const rootReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});
