

const ClientComment = () => {
    return (
        <section className="py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        What our customers say
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Expand your range of products and build lasting relationships with suppliers and customers. Provide the best in pens, paper, notebooks, and all things stationary with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
                    {[
                        {
                            imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
                            name: "Darrell Steward",
                            handle: "@darrels",
                            quote:
                                "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
                            hashtag: "#another",
                        },
                        {
                            imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
                            name: "Leslie Alexander",
                            handle: "@lesslie",
                            quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
                            hashtag: "#Celebration",
                        },
                        {
                            imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
                            name: "Jenny Wilson",
                            handle: "@jennywilson",
                            quote:
                                "This is a top-quality product. No need to think twice before making it live on the web.",
                            hashtag: "#make_it_fast",
                        },
                        {
                            imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
                            name: "Kristin Watson",
                            handle: "@kristinwatson2",
                            quote:
                                "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
                            hashtag: "#Celebration",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className="overflow-hidden bg-white rounded-md shadow-2xl">
                            <div className="px-5 py-6">
                                <div className="flex items-center justify-between">
                                    <img
                                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                        src={testimonial.imgSrc}
                                        alt={testimonial.name}
                                    />
                                    <div className="min-w-0 ml-3 mr-auto">
                                        <p className="text-base font-semibold text-black truncate">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600 truncate">{testimonial.handle}</p>
                                    </div>
                                    <a href="#" title="" className="inline-block text-sky-500">
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19.633 7.997c.013.175..." />
                                        </svg>
                                    </a>
                                </div>
                                <blockquote className="mt-5">
                                    <p className="text-base text-gray-800">
                                        {testimonial.quote}
                                        <span className="block text-sky-500">{testimonial.hashtag}</span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ClientComment;