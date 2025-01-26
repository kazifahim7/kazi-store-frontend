import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <DotLottieReact
                    src="/public/animation.json"
                    loop
                    autoplay
                />
                <p className="mt-4 text-xl text-black">Oops! The page you're looking for doesn't exist.</p>
                <p className="mt-2 text-md text-black">It seems you've taken a wrong turn. Let's get you back on track!</p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 text-black bg-red-400 rounded-lg  transition-colors"
                    >
                        /Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
