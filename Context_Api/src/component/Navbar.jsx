import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
                    MyBrand
                </Link>

                {/* Navigation Links */}
                <div className="space-x-6">
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-200">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-gray-200">
                        Contact
                    </Link>
                </div>

                {/* Call to Action */}
                <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
