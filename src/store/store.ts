import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
3;
