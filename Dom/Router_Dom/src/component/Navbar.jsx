import React from 'react';
import Image from './layouts/Image';
import Flex from './layouts/Flex';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full bg-slate-400 py-4 px-4">
            <div className="container mx-auto">
                <Flex className="justify-between items-center space-x-4">
                    {/* Logo */}
                    <Image src="data:image/png;base64,..." alt="Logo" className="w-12 h-12" />

                    {/* Navigation Links */}
                    <nav className="flex space-x-4">
                        <Link to="/" className="text-lg text-gray-700 hover:text-blue-500">Home</Link>
                        <Link to="/about" className="text-lg text-gray-700 hover:text-blue-500">About</Link>
                        <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-500">Contact</Link>
                    </nav>
                </Flex>
            </div>
        </div>
    );
};

export default Navbar;
