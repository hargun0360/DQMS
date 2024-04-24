import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    confirm : null,
}

export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        setConfirm: (state , action) => {
            state.confirm = action.payload
        }
    },
})

export const {setConfirm} = otpSlice.actions;
export default otpSlice.reducer;