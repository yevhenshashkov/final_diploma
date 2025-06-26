import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t mt-8">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} MyBooking</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <Link to="/about-us" className="hover:underline">About US</Link>
                    <Link to="/contacts" className="hover:underline">Contacts</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
