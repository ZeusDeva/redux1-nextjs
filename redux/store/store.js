import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/coutnerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
