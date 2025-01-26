import { FaTimesCircle } from 'react-icons/fa';


const PaymentFailure = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 space-y-6">
                <div className="flex justify-center">
                    <FaTimesCircle className="text-red-600 text-6xl" />
                </div>
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Payment Failed</h1>
                <p className="text-center text-lg text-gray-600">
                    Unfortunately, your payment could not be processed. Please try again or contact support.
                </p>

               
            </div>
        </div>
    );
};

export default PaymentFailure;
