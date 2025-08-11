import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Brand */}
            <div className="text-2xl font-bold text-black-800">
                <Link to="/" className="hover:text-black-600 transition-colors">
                    Dean Roy for Vermont
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
                <Link to="/about" className="text-gray-700 hover:text-black-600 transition-colors font-medium">
                    About
                </Link>
                <Link to="/platform" className="text-gray-700 hover:text-black-600 transition-colors font-medium">
                    Platform
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
