import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredHotels } from "../../store/slices/hotelsSlice";
import { getHotelsByCity } from "../../store/thunks/hotelsThunk";
import SearchBar from "../../components/UI/organisms/SearchBar";
import HotelCard from "../../components/UI/organisms/HotelCard";
import SideBar from "../../components/UI/organisms/SideBar";

const HotelsPage = () => {
    const dispatch = useDispatch();
    const hotels = useSelector(selectFilteredHotels);
    const loading = useSelector((state) => state.hotels.loading);
    const selectedCity = useSelector((state) => state.hotels.selectedCity);

    useEffect(() => {
        if (selectedCity) {
            dispatch(getHotelsByCity(selectedCity));
        }
    }, [dispatch, selectedCity]);

    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1 p-6">
                <SearchBar />
                {loading ? (
                    <p>Downloading...</p>
                ) : hotels.length === 0 ? (
                    <p className="text-gray-600">There are no hotels matching the selected filters.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {hotels.map((h) => (
                            <HotelCard key={h.id} hotel={h} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default HotelsPage;
