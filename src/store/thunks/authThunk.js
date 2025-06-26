import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_BASE_URL;
const LOGIN_URL = import.meta.env.VITE_LOGIN;
const SIGN_UP_URL = import.meta.env.VITE_SIGN_UP;

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}${LOGIN_URL}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
            });

            if(!res.ok) {
                throw new Error(res.message);
            }

            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data));

            return data;
        } catch(e) {
            return rejectWithValue(e.message);
        }
    }
);

export const signUp = createAsyncThunk(
    "auth/signup",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}${SIGN_UP_URL}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ name, email, password })
            });

            if(!res.ok) {
                throw new Error(res.message);
            }

            return await res.json();
        } catch(e) {
            return rejectWithValue(e.message);
        }
    }
);