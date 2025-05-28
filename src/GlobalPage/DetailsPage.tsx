/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useAddToCartMutation, useSingleProductQuery } from '../Redux/Feature/ProductApi';
import { useNavigate, useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useAppSelector } from '../Redux/hook';
import { toast } from 'sonner';
import { useEffect } from 'react';

import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft } from 'react-icons/fi';

const ProductDetail = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const { data: singleData, isLoading: isProductLoading } = useSingleProductQuery(id);
    const email = useAppSelector((state) => state.auth.user?.email);
    const navigate = useNavigate();
    const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!email) {
            toast.error("Please log in to continue");
            return navigate('/login', { state: { from: `/product/${id}` } });
        }

        if (Number(data.quantity) <= 0) {
            return toast.error("Quantity must be at least 1");
        }

        if (!singleData?.data?.inStock) {
            return toast.error("This product is currently out of stock");
        }

        const cartData = {
            email,
            quantity: Number(data.quantity),
            totalPrice: Number(singleData?.data?.price * data.quantity),
            product: singleData?.data?._id,
            address: data.address,
            number: data.number,
            name: data.name
        };

        const idToast = toast.loading("Adding to cart...");
        try {
            const result = await addToCart(cartData).unwrap();
            toast.success(result.message, { id: idToast });
            navigate('/cart');
            reset();
        } catch (error: any) {
            toast.error(error.data?.message || "Failed to add to cart", { id: idToast });
        }
    };

    const product = singleData?.data;

    if (isProductLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="animate-pulse flex flex-col lg:flex-row gap-8">
                    {/* Image Skeleton */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-200 rounded-xl h-96 w-full"></div>
                        <div className="flex mt-4 space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-20 h-20 bg-gray-200 rounded-md"></div>
                            ))}
                        </div>
                    </div>

                    {/* Details Skeleton */}
                    <div className="lg:w-1/2 space-y-4">
                        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>

                        <div className="py-4 border-t border-b border-gray-200 space-y-2">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            ))}
                        </div>

                        {/* Form Skeleton */}
                        <div className="bg-gray-50 rounded-xl p-6 mt-6 space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                    <div className="h-10 bg-gray-200 rounded"></div>
                                </div>
                            ))}
                            <div className="h-12 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Tabs Skeleton */}
                <div className="mt-12 animate-pulse">
                    <div className="border-b border-gray-200">
                        <div className="flex space-x-8">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-12 bg-gray-200 rounded w-24"></div>
                            ))}
                        </div>
                    </div>
                    <div className="py-6 space-y-4">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                    {[...Array(4)].map((_, j) => (
                                        <div key={j} className="h-4 bg-gray-200 rounded ml-4 w-3/4"></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
                <FiChevronLeft className="mr-1" /> Back to Products
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Product Image Gallery */}
                <div className="lg:w-1/2">
                    <div className="sticky top-4">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <Zoom zoomMargin={40}>
                                <img
                                    alt={product?.name}
                                    src={product?.img}
                                    className="w-full h-auto object-contain aspect-square"
                                />
                            </Zoom>
                        </div>
                        <div className="flex mt-4 space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer hover:border-orange-400">
                                    <img
                                        src={product?.img}
                                        alt={`Thumbnail ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2">
                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
                                <div className="flex items-center mt-2">
                                    <h1>Rating {product?.rating}</h1>
                                    <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button className="p-2 rounded-full hover:bg-gray-100">
                                    <FiHeart className="text-gray-500 hover:text-red-500" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100">
                                    <FiShare2 className="text-gray-500 hover:text-blue-500" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-gray-900">${product?.price?.toFixed(2)}</span>
                            {product?.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">${product?.originalPrice?.toFixed(2)}</span>
                            )}
                            {product?.discount && (
                                <span className="text-sm font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                    Save {product?.discount}%
                                </span>
                            )}
                        </div>

                        <div className="py-4 border-t border-b border-gray-200">
                            <p className="text-gray-700">{product?.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Brand</h3>
                                <p className="text-gray-900">{product?.brand}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Category</h3>
                                <p className="text-gray-900 capitalize">{product?.category}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Availability</h3>
                                <p className={product?.inStock ? "text-green-600" : "text-red-600"}>
                                    {product?.inStock ? "In Stock" : "Out of Stock"}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">SKU</h3>
                                <p className="text-gray-900">#{product?._id?.slice(0, 8).toUpperCase()}</p>
                            </div>
                        </div>

                        {/* Add to Cart Form */}
                        <div className="bg-gray-50 rounded-xl p-6 mt-6">
                            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        min={1}
                                        max={product?.quantity}
                                        {...register('quantity', {
                                            required: 'Quantity is required',
                                            min: { value: 1, message: 'Minimum quantity is 1' },
                                            max: { value: product?.quantity, message: `Only ${product?.quantity} available` }
                                        })}
                                        className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    />
                                    {errors.quantity && (
                                        <p className="mt-1 text-sm text-red-600">{errors.quantity.message?.toString()}</p>
                                    )}
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product?.quantity} available
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                                    <input
                                        type="text"
                                        {...register('address', { required: 'Shipping address is required' })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Enter your full address"
                                    />
                                    {errors.address && (
                                        <p className="mt-1 text-sm text-red-600">{errors.address.message?.toString()}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            {...register('number', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^[0-9]{10,15}$/,
                                                    message: 'Please enter a valid phone number'
                                                }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.number && (
                                            <p className="mt-1 text-sm text-red-600">{errors.number.message?.toString()}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            {...register('name', { required: 'Name is required' })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={!product?.inStock || isAddingToCart}
                                        className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${product?.inStock ? 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                    >
                                        {isAddingToCart ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <FiShoppingCart className="mr-2" />
                                                {product?.inStock ? 'Add to Cart' : 'Out of Stock'}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs */}
            <div className="mt-12">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button className="border-orange-500 text-orange-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            Description
                        </button>
                        <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            Specifications
                        </button>
                        <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                            Reviews (24)
                        </button>
                    </nav>
                </div>
                <div className="py-6">
                    <p className="text-gray-700">{product?.description}</p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-gray-900">Key Features</h4>
                            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                                <li>High-quality materials</li>
                                <li>Eco-friendly production</li>
                                <li>1-year manufacturer warranty</li>
                                <li>Free shipping on orders over $50</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900">Shipping Information</h4>
                            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                                <li>Standard delivery: 3-5 business days</li>
                                <li>Express delivery available</li>
                                <li>Free returns within 30 days</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;