import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    confirm : null,
}

export const locationSlice = createSlice({
    name: 'location',
    initialState : {
        latitude : "",
        longitude : ""
    },
    reducers: {
        addLocation: (state , action) => {
            state.latitude = action?.payload?.latitude;
            state.longitude = action?.payload?.longitude;
        },
    },
})

export const {addLocation} = locationSlice.actions;
export default locationSlice.reducer;