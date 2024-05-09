import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: null,
  longitude: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      console.log(state);
      console.log("action ", action);
      state.latitude = action?.payload?.latitude;
      state.longitude = action?.payload?.longitude;
    },
  },
});

export const { addLocation } = locationSlice.actions;
export default locationSlice.reducer;
