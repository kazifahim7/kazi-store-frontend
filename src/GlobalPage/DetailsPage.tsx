import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

const ProductDetail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('Add to Cart Data:', data);
        alert('Product added to cart!');
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Product Image */}
                <div className="lg:w-1/2 p-4">
                    <img
                        src="https://i.postimg.cc/PJWBX8mw/Adobe-Express-file-2.png"
                        alt="Product Image"
                        className="w-full h-auto object-cover rounded-lg "
                    />
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 p-4 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">Product Name</h1>
                    <p className="text-lg text-gray-600">Brand: Awesome Brand</p>
                    <p className="text-lg text-gray-600">Category: File</p>
                    <p className="text-lg text-gray-600">Price: $99.99</p>
                    <p className="text-lg text-gray-600">Description: This is a product description. It can be detailed here, highlighting the features and specifications of the product.</p>
                </div>
            </div>

            {/* Add to Cart Form */}
            <div className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add to Cart</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Quantity */}
                    <div>
                        <label className="block text-sm font-semibold">Quantity</label>
                        <input
                            type="number"
                            {...register('quantity', { required: 'Quantity is required', min: 1 })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message?.toString()}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-semibold">Address</label>
                        <input
                            type="text"
                            {...register('address', { required: 'Address is required' })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message?.toString()}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-semibold">Phone Number (Optional)</label>
                        <input
                            type="text"
                            {...register('number')}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold">Your Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-500 focus:ring-2 focus:ring-indigo-300"
                    >
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductDetail;
