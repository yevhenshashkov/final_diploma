import { createSlice } from "@reduxjs/toolkit";
import { getDestinations } from "../thunks/destinationsThunk";

const initialState = { items: [], loading: false, error: null };

const destinationsSlice = createSlice({
    name: "destinations",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getDestinations.pending, state => { state.loading = true; state.error = null; })
            .addCase(getDestinations.fulfilled, (state, action) => { state.items = action.payload; state.loading = false; })
            .addCase(getDestinations.rejected, (state, action) => { state.error = action.payload; state.loading = false; });
    }
});

export default destinationsSlice.reducer;
