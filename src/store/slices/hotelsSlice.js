import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getHotelsByCity } from "../thunks/hotelsThunk";

const initialState = {
    items: [],
    loading: false,
    error: null,
    selectedCity: "",
    filters: {
        minPrice: 0,
        maxPrice: 500,
        childrenFriendly: false,
        petsAllowed: false,
    },
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        setSelectedCity(state, action) {
            state.selectedCity = action.payload;
        },
        setFilters(state, action) {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotelsByCity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHotelsByCity.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getHotelsByCity.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { setSelectedCity, setFilters } = hotelsSlice.actions;

const selectHotels = (state) => state.hotels.items;
const selectFilters = (state) => state.hotels.filters;
const selectSelectedCity = (state) => state.hotels.selectedCity;

export const selectFilteredHotels = createSelector(
    [selectHotels, selectFilters, selectSelectedCity],
    (hotels, filters, selectedCity) => {
        return hotels
            .filter(hotel => !selectedCity || hotel.city === selectedCity)
            .filter(hotel =>
                hotel.pricePerNight >= filters.minPrice &&
                hotel.pricePerNight <= filters.maxPrice
            )
            .filter(hotel =>
                !filters.childrenFriendly || hotel.childrenFriendly
            )
            .filter(hotel =>
                !filters.petsAllowed || hotel.petsAllowed
            );
    }
);

export default hotelsSlice.reducer;
