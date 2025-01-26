import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const BussinessConnection = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                   
                        <DotLottieReact
                       
                            src="/public/LLDGzZXAdq.json"
                            loop
                            autoplay
                        />
                    

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Grow your stationary business with quality connections.</h2>
                        <p className="mt-6 text-base text-gray-600">Expand your range of products and build lasting relationships with suppliers and customers. Provide the best in pens, paper, notebooks, and all things stationary with ease.</p>

                        <Link to={'/all-product'} title="" className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white transition-all duration-200 bg-orange-500 rounded-lg mt-9" role="button"> Explore </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BussinessConnection;