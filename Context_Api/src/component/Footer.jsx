import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">About Us</h3>
                    <p className="text-sm">
                        We are a company dedicated to providing the best service and products for our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                    <p className="text-sm">123 Main Street, Anytown, USA</p>
                    <p className="text-sm">Email: info@mybrand.com</p>
                    <p className="text-sm">Phone: +1 (555) 123-4567</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-500 mt-6">
                © 2024 MyBrand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
