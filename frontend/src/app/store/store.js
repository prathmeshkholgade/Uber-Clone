import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../features/auth/userSlice";
import captainReducers from "../features/auth/captainSlice";
export const store = configureStore({
  reducer: {
    auth: userReducers,
    captainAuth: captainReducers,
  },
});
