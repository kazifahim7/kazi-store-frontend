import { FaQuoteLeft, FaTwitter } from "react-icons/fa";

const ClientComment = () => {
    return (
        <section className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white sm:py-20 lg:py-28 flex items-center">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        What our <span className="text-orange-500">customers</span> say
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
                        Expand your range of products and build lasting relationships with suppliers and customers.
                        Provide the best in pens, paper, notebooks, and all things stationary with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 h-full">
                    {[
                        {
                            imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            name: "Darrell Steward",
                            handle: "@darrels",
                            quote: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
                            role: "Stationery Shop Owner"
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            name: "Leslie Alexander",
                            handle: "@lesslie",
                            quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
                            role: "Art Director"
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            name: "Jenny Wilson",
                            handle: "@jennywilson",
                            quote: "This is a top-quality product. No need to think twice before making it live on the web.",
                            role: "Graphic Designer"
                        },
                        {
                            imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                            name: "Kristin Watson",
                            handle: "@kristinwatson2",
                            quote: "Finally, I've found a template that covers all bases for a bootstrapped startup.",
                            role: "Content Creator"
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative h-full overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover"
                                            src={testimonial.imgSrc}
                                            alt={testimonial.name}
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                                            <FaQuoteLeft className="text-white text-xs" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <blockquote className="mt-6 flex-1">
                                    <p className="text-gray-700 italic relative pl-6">
                                        <FaQuoteLeft className="absolute left-0 top-0 text-gray-300 text-xl" />
                                        {testimonial.quote}
                                    </p>
                                </blockquote>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-sm text-orange-500 font-medium">#{testimonial.handle}</span>
                                    <a
                                        href="#"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label="Twitter profile"
                                    >
                                        <FaTwitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientComment;