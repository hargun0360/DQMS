import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    confirm : null,
    name : ''
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
    },
})

export const {setConfirm , addUser} = otpSlice.actions;
export default otpSlice.reducer;