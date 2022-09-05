import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  display: boolean;
}

const initialState: InitialState = {
  display: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.display = true;
    },
    closeMenu: (state) => {
      state.display = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
