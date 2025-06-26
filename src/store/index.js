import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./slices/hotelsSlice";
import authReducer from "./slices/authSlice";
import destinationsReducer from "./slices/destinationsSlice";

export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        destinations: destinationsReducer,
        auth: authReducer,
    },
});
