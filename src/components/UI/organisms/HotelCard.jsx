import { FaChild, FaPaw } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
    return (
        <div className="border rounded p-4 shadow-md w-full max-w-md bg-white">
            <img
                src={hotel.image || '/assets/img/placeholder.jpg'}
                alt={hotel.name}
                className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.city}</p>
            <p className="text-blue-600 font-bold mt-2">${hotel.pricePerNight} / ночь</p>
            <div className="flex space-x-2 mt-2">
                {hotel.childrenFriendly && (
                    <FaChild title="Можно с детьми" className="text-green-500" />
                )}
                {hotel.petsAllowed && (
                    <FaPaw title="Можно с животными" className="text-yellow-500" />
                )}
            </div>
        </div>
    );
};

export default HotelCard;
