/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useDeleteProductIntoCartMutation, useMyCartProductQuery, usePaymentMutation } from "../Redux/Feature/ProductApi";
import { toast } from "sonner";

const Cart = () => {
    const { data: myCartData } = useMyCartProductQuery(undefined);
    const cartItems = myCartData?.data?.orderedItem || [];
    const [deleteProducts] = useDeleteProductIntoCartMutation()
    const [payment] = usePaymentMutation()
   

    const deleteProduct = async (id: string) => {

        const toastId = toast.loading("deleting..")
        try {
            const result = await deleteProducts(id).unwrap()
            if (result) {
                toast.success(result.message, { id: toastId })

            }
        } catch (error: any) {
            toast.error(error.data.message, { id: toastId })
        }

    }


    const createOrder = async () => {
        const paymentData={
            customerMail: myCartData?.data?.customerMail,
            totalCost: String(myCartData?.data?.totalCost),
            customerName: myCartData?.data?.customerName,
            customerNumber: myCartData?.data?.customerNumber,
            orderProducts:cartItems.map((cartItem:{product:string,address:string,quantity:number,totalPrice:number})=>({
                productId: cartItem?.product,
                address: cartItem?.address,
                quantity: String(cartItem?.quantity),
                totalPrice: String(cartItem?.totalPrice)
            }))
        }

        const toastId = toast.loading("loading..")
        try {
            const result = await payment(paymentData).unwrap()
            if (result) {
                
                window.location.replace(result?.data?.url)
                toast.success(result.message, { id: toastId })

            }
        } catch (error: any) {
            console.log(error)
            toast.error(error.data.message, { id: toastId })
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="text-xl text-center font-semibold">Your Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <img
                            src="https://i.postimg.cc/YqS4bpCT/Red-Prohibited-sign-No-icon-warning-or-stop-symbol-safety-danger-isolated-vector-illustration.jpg"
                            alt="No items in cart"
                            className="w-36 h-32"
                        />
                        <p className="text-lg font-semibold text-gray-700">
                            Your cart is empty.
                        </p>
                        <button
                            type="button"
                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                            onClick={() => window.location.href = "/all-product"} // Adjust the URL to your shop page
                        >
                            Back to Shop
                        </button>
                    </div>
                ) : (
                    <>
                        <ul className="flex flex-col divide-y dark:divide-gray-300">
                            {cartItems.map((product: any) => (
                                <li
                                    key={product._id}
                                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                                >
                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                        <img
                                            className="flex-shrink-0 object-cover w-20 h-20 dark:border rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                            src={product?.productDetails[0]?.img}
                                            alt="Product"
                                        />
                                        <div className="flex flex-col justify-between w-full pb-4">
                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                        {product?.productDetails[0]?.name}
                                                    </h3>
                                                    <p className="text-base text-black">Order Quantity</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-semibold">
                                                        {product?.productDetails[0]?.price} (per pack)
                                                    </p>
                                                    <p className="text-base text-black">
                                                        {product?.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex text-sm divide-x">
                                                <button
                                                    onClick={() => deleteProduct(product?._id)}
                                                    type="button"
                                                    className="flex items-center cursor-pointer px-2 py-1 pl-0 space-x-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        className="w-4 h-4 fill-current"
                                                    >
                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                        <rect width="32" height="200" x="168" y="216"></rect>
                                                        <rect width="32" height="200" x="240" y="216"></rect>
                                                        <rect width="32" height="200" x="312" y="216"></rect>
                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                    </svg>
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-1 text-right">
                            <p>
                                Total amount:
                                <span className="font-semibold">
                                    {myCartData?.data?.totalCost} BDT
                                </span>
                            </p>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Link to={'/all-product'}
                                type="button"
                                className="px-6 py-2 border rounded-md dark:border-orange-500"
                            >
                                Back
                                <span className="sr-only sm:not-sr-only"> to shop</span>
                            </Link>
                            <button
                                onClick={createOrder}
                                type="button"
                                className="px-6 py-2 border rounded-md dark:bg-orange-500 dark:text-gray-50 dark:border-orange-500"
                            >
                                <span className="sr-only sm:not-sr-only">Order</span>
                                Now
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
