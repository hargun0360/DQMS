import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./otpSlice/otp_reducer";
import { qwaitAPI } from "./slices/apiSlice";
import { locationSlice } from "./otpSlice/location";

export const store = configureStore({
  reducer: {
    [qwaitAPI.reducerPath]: qwaitAPI.reducer,
    otpSlice: otpSlice,
    location : locationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(qwaitAPI.middleware),
});
