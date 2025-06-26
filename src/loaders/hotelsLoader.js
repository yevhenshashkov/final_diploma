import { getDestinations } from "../store/thunks/destinationsThunk";
import { setFilters } from "../store/slices/hotelsSlice";

export const hotelsLoader = (store) => {
    return async () => {
        await store.dispatch(getDestinations());
        store.dispatch(setFilters({ maxPrice: 1000 }));
        return null;
    };
};
