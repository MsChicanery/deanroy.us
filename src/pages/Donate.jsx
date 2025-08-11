import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Donate = () => {
    return (
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <Navigation />

            {/* Info Section */}
            <section className="my-12 sm:my-16 lg:my-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                    {/* Text */}
                    <div className="flex-1 max-w-full lg:max-w-lg">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                            Support the Campaign
                        </h1>
                        <p className="text-lg sm:text-xl font-semibold mb-6">
                            We currently do not have a donation page. If you'd like to support Dean Roy’s campaign or get involved, please fill out the contact form below.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 max-w-md w-full rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/ff993b55c34eaf36d37c62717ef83bb12faee0c8?width=901"
                            alt="Dean Roy"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mb-16 sm:mb-20 px-3 sm:px-0 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
                    Get in Touch
                </h2>

                <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:space-x-6">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">First name</label>
                            <input
                                type="text"
                                placeholder="Jane"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                            />
                        </div>
                        <div className="flex-1 mt-4 sm:mt-0">
                            <label className="block text-sm font-medium mb-1">Last name</label>
                            <input
                                type="text"
                                placeholder="Smitherton"
                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="email@janesfakedomain.net"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Your message</label>
                        <textarea
                            placeholder="Enter your question or message"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-green-800 min-h-[100px]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-800 hover:bg-green-900 transition-colors text-white font-semibold py-3 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </section>

            <Footer />
        </div>
    );
};

export default Donate;
