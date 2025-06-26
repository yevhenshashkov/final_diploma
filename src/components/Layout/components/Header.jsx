
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
                MyBooking
            </Link>
            <nav className="space-x-6 text-sm font-medium">
                <NavLink
                    to="/hotels"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 underline" : "text-gray-700 hover:text-blue-600"
                    }
                >
                    Hotels
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 underline" : "text-gray-700 hover:text-blue-600"
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 underline" : "text-gray-700 hover:text-blue-600"
                    }
                >
                    Contacts
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 underline" : "text-gray-700 hover:text-blue-600"
                    }
                >
                    Login
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
