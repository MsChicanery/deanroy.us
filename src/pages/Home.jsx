import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const endorsements = [
    {
        name: "Werner N. Paulus",
        role: "Namibian Political Activist",
        avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5ab399fde7c07b76d3313e08a4b3a8cd08e3280f?width=300"
    },
];

const Home = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <main className="pt-2">
                {/* Hero Section */}
                <section
                    id="hero"
                    className={`relative overflow-hidden bg-green-900 py-20 transition-all duration-1000 ${
                        isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-12">
                            {/* Text and button on left */}
                            <div className="md:w-1/2 text-center md:text-left text-white">
                                <h1 className="text-5xl font-bold mb-6 leading-tight">
                                    Dean Roy For Vermont
                                </h1>
                                <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                                    Dean Roy is running to become the first governor under the age of 18 and reduce the affordability crisis.
                                </p>
                                <button
                                    type="button"
                                    className="bg-white text-green-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                                >
                                    Donate Now
                                </button>
                            </div>

                            {/* Image on right */}
                            <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/e830ef8a8f26b2c6ad5345c67ecd2f28f1b97fad?width=784"
                                    alt="Dean Roy"
                                    className="w-full h-auto rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Quote Section */}
                <section
                    id="quote"
                    className={`py-20 transition-all duration-1000 delay-200 ${
                        isVisible.quote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <blockquote className="relative">
                            <div className="bg-gray-200 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
                                    "This isn't about me. This is about making a more affordable Vermont for all of us."
                                </p>
                                <footer className="mt-6">
                                    <cite className="text-lg font-semibold text-gray-900">— Dean Roy</cite>
                                </footer>
                            </div>
                            <div className="absolute -top-4 left-8 text-6xl text-gray-300 leading-none">"</div>
                        </blockquote>
                    </div>
                </section>

                {/* Meet Dean Roy Section */}
                <section
                    id="about"
                    className={`py-20 bg-gray-50 transition-all duration-1000 delay-300 ${
                        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/476081b969c452c6492e266be47097b6567aa35d?width=1146"
                                        alt="Dean Roy at event"
                                        className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    Meet Dean Roy
                                </h2>
                                <div className="w-20 h-1 bg-blue-600"></div>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Dean Roy is a student at Stowe Middle School and a member of the Freedom and Unity party. Born and raised in Vermont, Roy has developed strong ties to his community and city. His plans include consolidating school districts, taxing large corporations and short-term rentals, strengthening ties with Canada and the EU, and keeping Vermont free from all those who try to harm it. If elected, Roy would be the youngest Governor in the history of America.
                                </p>
                                <div className="pt-4">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                                        Learn More About Dean
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get Involved Section */}
                <section
                    id="get-involved"
                    className={`relative py-20 bg-white overflow-hidden transition-all duration-1000 delay-400 ${
                        isVisible['get-involved'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    GET INVOLVED
                                </h2>
                                <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mb-8"></div>
                                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                    Join the many people involved in our path to victory.
                                </p>
                                <p className="text-lg text-gray-600 mb-10">
                                    Sign up below, and we'll send you an email once we begin official campaigning.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button
                                        type="button"
                                        className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                    >
                                        <a href="/about">Join Our Contact List</a>
                                    </button>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/4e400f15ff0a8e21cd8031c9efc21400dbb434fd?width=1324"
                                        alt="Campaign event"
                                        className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Endorsements Section */}
                <section
                    id="endorsements"
                    className={`py-20 bg-gray-50 transition-all duration-1000 delay-500 ${
                        isVisible.endorsements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Endorsements
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
                            {endorsements.map(({ name, role, avatar }, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                                >
                                    <div className="mb-6">
                                        {avatar ? (
                                            <img
                                                src={avatar}
                                                alt={name}
                                                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto border-4 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-gray-400 text-2xl font-bold">
                          {name.split(' ').map(n => n[0]).join('')}
                        </span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;