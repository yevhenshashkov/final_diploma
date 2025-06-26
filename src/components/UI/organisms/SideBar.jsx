import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity, setFilters } from "../../../store/slices/hotelsSlice.js";
import { useState, useEffect } from "react";

const SideBar = () => {
    const dispatch = useDispatch();
    const hotels = useSelector((state) => state.hotels.items);
    const filters = useSelector((state) => state.hotels.filters);
    const uniqueCities = [...new Set(hotels.map((h) => h.city))];

    const [minPrice, setMinPrice] = useState(filters.minPrice);
    const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

    useEffect(() => {
        dispatch(setFilters({ minPrice, maxPrice }));
    }, [minPrice, maxPrice, dispatch]);

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        dispatch(setFilters({ [name]: checked }));
    };

    const handleReset = () => {
        dispatch(setSelectedCity(null));
        dispatch(setFilters({
            minPrice: 0,
            maxPrice: 1000,
            childrenFriendly: false,
            petsAllowed: false
        }));
        setMinPrice(0);
        setMaxPrice(1000);
    };

    const handleMinPriceChange = (e) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setMinPrice(val);
    };

    const handleMaxPriceChange = (e) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setMaxPrice(val);
    };

    return (
        <aside className="w-64 p-5 border-r bg-gray-100 text-sm">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Cities</h3>
                <ul className="space-y-1">
                    {uniqueCities.map((city) => (
                        <li
                            key={city}
                            onClick={() => dispatch(setSelectedCity(city))}
                            className="cursor-pointer hover:text-blue-500 transition"
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Price ($)</h3>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        onBlur={() => dispatch(setFilters({ minPrice }))}
                        onKeyDown={(e) => e.key === "Enter" && dispatch(setFilters({ minPrice }))}
                        className="w-full px-2 py-1 border rounded appearance-none"
                    />
                    <span>-</span>
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        onBlur={() => dispatch(setFilters({ maxPrice }))}
                        onKeyDown={(e) => e.key === "Enter" && dispatch(setFilters({ maxPrice }))}
                        className="w-full px-2 py-1 border rounded appearance-none"
                    />
                </div>
            </div>


            <div className="mb-6">
                <h3 className="font-semibold mb-2">Living conditions</h3>
                <label className="flex items-center gap-2 mb-1">
                    <input
                        type="checkbox"
                        name="childrenFriendly"
                        checked={filters.childrenFriendly}
                        onChange={handleCheckbox}
                    />
                    Children friendly
                </label>
                <label className="flex items-center gap-2 mb-1">
                    <input
                        type="checkbox"
                        name="petsAllowed"
                        checked={filters.petsAllowed}
                        onChange={handleCheckbox}
                    />
                    Pets friendly
                </label>
            </div>
            <button
                className="mt-4 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                onClick={handleReset}
            >
                Reset filters
            </button>
        </aside>
    );
};

export default SideBar;
