import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    confirm : null,
    name : '',
    location : {
        latitude: null,
        longitude: null,
    }
}

export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        setConfirm: (state , action) => {
            state.confirm = action.payload
        },
        addUser: (state, action) => {
            console.log(state , action);
            state.name = action.payload;
        },
        addLocation: (state, action) => {
            state.location.latitude = action?.payload?.latitude;
            state.location.longitude = action?.payload?.longitude;
          },
    },
})

export const {setConfirm , addUser , addLocation} = otpSlice.actions;
export default otpSlice.reducer;