

const OurMission = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                        Welcome to
                        <span className="relative inline-block">
                            <span className="absolute inline-block w-full h-2 bg-orange-500 bottom-1.5"> </span>
                            <span className="relative"> Booken </span>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                    <div>
                        <img
                            className="w-full mx-auto sm:max-w-xs"
                            src="https://i.postimg.cc/fRXr7d3S/men-who-are-sick-are-about-take-antibiotics.jpg"
                            alt="Founder of Stationary Haven"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Hi! I’m Fahim, founder of Booken.
                        </h3>
                        <p className="mt-4 text-lg text-gray-700">
                            At Booken, we provide a one-stop solution for all your
                            stationery needs. From premium notebooks and pens to art supplies and
                            planners, we’re dedicated to fueling your creativity and productivity.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Whether you’re an artist, a student, or a professional, our carefully
                            curated collection is here to inspire and support you in your daily
                            tasks. With quality products and exceptional service, we make sure
                            you never run out of ideas—or supplies.
                        </p>

                        <h3 className="mt-8 text-lg font-semibold text-gray-900">
                            How do we bring you the best products?
                        </h3>
                        <p className="mt-4 text-lg text-gray-700">
                            We partner with the best brands and artisans from around the world to
                            offer products that are not only functional but also beautifully
                            designed. Our mission is to make every writing, drawing, or planning
                            experience special for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default OurMission;