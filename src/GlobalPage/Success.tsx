import { FaCheckCircle } from 'react-icons/fa';


const PaymentSuccess = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 space-y-6">
                <div className="flex justify-center">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>
                <h1 className="text-center text-4xl font-extrabold text-gray-800">Payment Successful!</h1>
                <p className="text-center text-lg text-gray-600">
                    Your payment has been processed successfully. Thank you for your purchase.
                </p>

            </div>
        </div>
    );
};

export default PaymentSuccess;
