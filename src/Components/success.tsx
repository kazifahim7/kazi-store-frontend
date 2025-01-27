

const Success = () => {
    return (
        <section className="py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                        How we ensure quality for your stationery needs
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        We offer the finest quality stationery, tailored to meet your every need. From writing tools to paper supplies, we have it all.
                    </p>
                </div>

                <ul className="max-w-md mx-auto mt-16 space-y-12">
                    <li data-aos-duration="1200" data-aos-delay="50" data-aos="zoom-out-down" className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Create your order</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Select from a wide range of high-quality stationery products to create the perfect order for your home or office.
                            </p>
                        </div>
                    </li>

                    <li data-aos-duration="1300" data-aos-delay="130" data-aos="zoom-out-down" className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Build your shopping list</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Organize your favorite items into a shopping list. From pens to notebooks, keep everything ready for purchase.
                            </p>
                        </div>
                    </li>

                    <li data-aos-duration="1400" data-aos-delay="170" data-aos="zoom-out-down" className="relative flex items-start">
                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Place your order</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Once you're ready, place your order and enjoy prompt delivery of all your stationery needs, right to your door.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
};

export default Success;