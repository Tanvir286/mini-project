import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <p>
                        We are committed to delivering high-quality products and services to our customers, aiming to 
                        enhance their experience with our brand. Join us in exploring innovative solutions and exceptional designs.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                        <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                        <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p>123 Business St., New York, NY 10001</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>

            {/* Social Media and Newsletter */}
            <div className="container mx-auto mt-8 text-center space-y-4">
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
                    <form className="flex justify-center">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="p-2 rounded-l-md focus:outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
