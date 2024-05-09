import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./otpSlice/otp_reducer";
import { locationSlice } from "./otpSlice/location";

export const store = configureStore({
  reducer: {
    otpSlice: otpSlice,
    location: locationSlice,
  },
});
