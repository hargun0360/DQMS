import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./otpSlice/otp_reducer";
import { qwaitAPI } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    [qwaitAPI.reducerPath]: qwaitAPI.reducer,
    otpSlice: otpSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(qwaitAPI.middleware),
});
