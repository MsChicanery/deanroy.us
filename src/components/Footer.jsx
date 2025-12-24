import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        // Set gtranslate settings
        window.gtranslateSettings = {
            default_language: 'en',
            detect_browser_language: true,
            languages: ['en', 'fr', 'it', 'es', 'de', 'pl', 'el', 'hi', 'nl', 'ar', 'zh-CN', 'ko', 'la'],
            wrapper_selector: '.gtranslate_wrapper',
        };

        // Check if script already exists
        if (!document.getElementById('gtranslate-script')) {
            const script = document.createElement('script');
            script.id = 'gtranslate-script';
            script.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <footer className="bg-gradient-to-b from-white to-white text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-black mb-4">Dean Roy for Governor</h2>
                        <p className="text-black mb-4 leading-relaxed">
                            Building a stronger future for our state through progressive leadership,
                            community engagement, and innovative solutions.
                        </p>
                        <div className="flex items-center text-black">
                            <svg className="w-5 h-5 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:hi@deanroy.us" className="hover:text-black transition-colors">
                                hi@deanroy.us
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="/about" className="block text-black hover:text-black transition-colors">
                                About Dean
                            </a>
                            <a href="/platform" className="block text-black hover:text-black transition-colors">
                                Platform
                            </a>
                        </div>
                    </div>

                    {/* Social Media & Language */}
                    <div>
                            <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
                            <div className="flex space-x-4 mb-6">
                                <a href="https://instagram.com/deanroy_forgovernor/" className="text-black hover:text-black transition-colors transform hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>

                        {/* GTranslate Widget Wrapper */}
                        <div className="gtranslate_wrapper mb-4"></div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Credits */}
                        <div className="text-sm text-black text-center md:text-left">
                            <div className="mb-1">
                                <span>Designed and Built by </span>
                                <span className="text-black font-medium">Kayla M. Arora</span>
                                <span> • Hosted on Vercel & Designed with Figma</span>
                            </div>
                            <div>
                                Campaign Managed by <span className="text-black font-medium">Charles Bass</span>
                            </div>
                        </div>

                        {/* Legal Notice */}
                        <div className="bg-white px-4 py-2 rounded-lg">
                            <div className="text-xs text-black font-medium text-center">PAID FOR BY Kayla M. ARORA</div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-xs text-black mt-6">
                        © 2024 Dean Roy for Governor. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
