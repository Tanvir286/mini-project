import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar Section */}
            <header>
                <Navbar />
            </header>

            {/* Main Content Section */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Root;
