import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterReducer";
import rootReducer from "../reducers/rootReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
