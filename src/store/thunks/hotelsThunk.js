import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_BASE_URL;

export const getHotelsByCity = createAsyncThunk(
    "hotels/getHotelsByCity",
    async (city, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/hotels?city=${encodeURIComponent(city)}`);
            if (!res.ok) throw new Error("Failed to load hotels");
            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
