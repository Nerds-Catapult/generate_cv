import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";

export const Store = configureStore({
    reducer: {
        auth: authSlice,
    }
});
