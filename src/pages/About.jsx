import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <Navigation />

            {/* About Section */}
            <section className="my-12 sm:my-16 lg:my-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                    {/* Text */}
                    <div className="flex-1 max-w-full lg:max-w-lg">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                            About
                        </h1>
                        <p className="text-lg sm:text-xl font-semibold mb-6">
                            Dean Roy is running to become the first governor under the age of 18 and reduce the affordability crisis.
                        </p>
                        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                            Dean Roy is a student at Stowe Middle School and a member of the Freedom and Unity party. Born and raised in Vermont, Roy has developed ties to his community and city.
                            <br /><br />
                            His plans include consolidating school districts, taxing large corporations and short-term rentals, strengthening ties with Canada and the EU, and keeping Vermont free from all those who try to harm it. If elected, Roy would be the youngest Governor in the history of America.
                            <br /><br />
                            Roy's campaign is managed by Charles Bass, and his website is ran by Kaleb Arora and hosted on Altivox Networks LLC.
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
                    Contact me
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

                    <p className="text-xs text-gray-600 leading-relaxed">
                        By submitting this form and signing up for texts, you consent to receive donation asks and informational messages from parties related to the Dean Roy Campaign. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help.
                    </p>

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

export default About;
