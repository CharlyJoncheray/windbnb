import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FilterEnum {
  LOCATION = "location",
  GUESTS = "guests",
}

interface InitialState {
  filter: FilterEnum;
}

const initialState: InitialState = {
  filter: FilterEnum.LOCATION,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterEnum>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
