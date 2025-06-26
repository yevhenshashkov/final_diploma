import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../../../store/slices/hotelsSlice";
import { getHotelsByCity } from "../../../store/thunks/hotelsThunk";

const SearchBar = () => {
    const dispatch = useDispatch();
    const destinations = useSelector((state) => state.destinations.items);
    const [inputValue, setInputValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (!inputValue.trim()) return setFiltered([]);
        const low = inputValue.toLowerCase();
        setFiltered(destinations.filter((d) => d.label.toLowerCase().includes(low)));
    }, [inputValue, destinations]);

    const handleSelect = (city) => {
        setInputValue(city);
        setFiltered([]);
    };

    const handleShow = () => {
        if (!inputValue.trim()) return;
        dispatch(setSelectedCity(inputValue));
        dispatch(getHotelsByCity(inputValue));
    };

    return (
        <div className="relative mb-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Choose your city"
                    className="border rounded px-3 py-2 w-full"
                />
                <button
                    onClick={handleShow}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Show
                </button>
            </div>

            {filtered.length > 0 && (
                <div className="absolute bg-white border rounded w-full mt-1 z-10 max-h-48 overflow-y-auto">
                    {filtered.map((d) => (
                        <div
                            key={d.id}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(d.label)}
                        >
                            {d.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
