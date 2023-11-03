/* eslint-disable  */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
    token: string;
    user: user;
}

type user = {
    username: string;
    email: string;
    password: string;
}


const initialState: AuthState = {
    isLoggedIn: false,
    token: "",
    user: {
        username: "",
        email: "",
        password: "",
    },
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthState>) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = "";
            state.user = {
                username: "",
                email: "",
                password: "",
            };
        },
    },
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
