import { createSlice } from "@reduxjs/toolkit";

import { login, signUp } from "../thunks/authThunk.js";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: JSON.parse(localStorage.getItem("user"))?.token || null,
        loading: false,
        error: "",
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";

                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Login failed";
            })
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(signUp.fulfilled, (state) => {
                state.loading = false;
                state.error = "";
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "SignUp failed";
            })
    }
});

export default authSlice.reducer;