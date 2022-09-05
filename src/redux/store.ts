import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import filterReducer from "./filterSlice";
import staysReducer from "./staysSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    filter: filterReducer,
    stays: staysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
