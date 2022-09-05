import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stay } from "../interfaces";

interface InitialState {
  stays: Stay[];
  displayedStays: Stay[];
  location: string;
  guests: {
    adults: number;
    childrens: number;
  };
}

const initialState: InitialState = {
  stays: [],
  displayedStays: [],
  location: "",
  guests: {
    adults: 0,
    childrens: 0,
  },
};

export const staysSlice = createSlice({
  name: "stays",
  initialState,
  reducers: {
    setstays: (state, action: PayloadAction<Stay[]>) => {
      state.stays = action.payload;
    },
    setDisplayStays: (state, action: PayloadAction<Stay[]>) => {
      state.displayedStays = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setAdults: (state, action: PayloadAction<number>) => {
      state.guests.adults = action.payload;
    },
    setChildrens: (state, action: PayloadAction<number>) => {
      state.guests.childrens = action.payload;
    },
    search: (state) => {
      let stayToDisplay: Stay[] = state.stays;
      if (state.location !== initialState.location) {
        stayToDisplay = state.stays.filter(
          (stay) => stay.city === state.location
        );
      }
      if (
        state.guests.adults !== initialState.guests.adults ||
        state.guests.childrens !== initialState.guests.childrens
      ) {
        stayToDisplay = stayToDisplay.filter(
          (stay) => stay.beds >= state.guests.adults + state.guests.childrens
        );
      }
      state.displayedStays = stayToDisplay;
    },
  },
});

export const {
  setstays,
  setDisplayStays,
  setLocation,
  setAdults,
  setChildrens,
  search,
} = staysSlice.actions;
export default staysSlice.reducer;
