import { configureStore } from '@reduxjs/toolkit'
import otpSlice from "./otpSlice/otp_reducer";

export const store = configureStore({
    reducer: {
        otpSlice : otpSlice,
    },
})