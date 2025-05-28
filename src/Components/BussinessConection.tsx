import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BusinessConnection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-orange-50 sm:py-20 lg:py-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="relative order-last lg:order-first">
                        <div className="relative overflow-hidden ">
                            <img
                                src="https://i.postimg.cc/BbnVNhXh/4204968.jpg"
                                alt="Business connections"
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                            
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden lg:block">
                            <div className="px-6 py-4 bg-white rounded-xl shadow-lg">
                                <h4 className="text-xl font-bold text-gray-900">1,200+</h4>
                                <p className="text-sm text-gray-600">Happy Businesses</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <span className="inline-block px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
                            Business Growth
                        </span>
                        <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
                            Grow your <span className="text-orange-500">stationery</span> business with quality connections
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            Expand your range of products and build lasting relationships with suppliers and customers.
                            Provide the best in pens, paper, notebooks, and all things stationery with ease.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <Link
                                to="/all-product"
                                className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:shadow-lg"
                            >
                                Explore Products
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-500 transition-all duration-300 bg-white border border-orange-500 rounded-lg hover:bg-orange-50"
                            >
                                Contact Suppliers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessConnection;