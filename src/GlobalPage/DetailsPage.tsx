import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useAddToCartMutation, useSingleProductQuery } from '../Redux/Feature/ProductApi';
import { useNavigate, useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useAppSelector } from '../Redux/hook';
import { toast } from 'sonner';

const ProductDetail = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {id}=useParams()
    const {data:singleData}=useSingleProductQuery(id)

    const email=useAppSelector((state)=>state.auth.user?.email)

    const navigate=useNavigate()

    const [addToCart]=useAddToCartMutation()

    

    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
       
        if(!email){
            toast.error("Please Log In")
           return navigate('/login')
        }
        data.email=email
        data.quantity = Number(data.quantity)
        data.totalPrice = Number(singleData?.data?.price * data.quantity)
        data.product = singleData?.data?._id

        if (data.quantity <0){
            return toast.error("select more..")
        }


        console.log('Add to Cart Data:', data);

        const idToast = toast.loading("creating...");
        try {
           
            const result = await addToCart(data).unwrap();
            if (result) {
                toast.success(result.message, { id: idToast });
                navigate('/cart')
                reset();
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id: idToast });
        }

        
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Product Image */}
                <div className="lg:w-1/2 p-4">

                    <Zoom>
                        <img
                            alt="That"
                            src={singleData?.data?.img}
                            width="500"
                        />
                    </Zoom>


                    {/* <img
                        src={singleData?.data?.img}
                        alt="Product Image"
                        className="w-full h-auto object-cover rounded-lg "
                    /> */}
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 p-4 space-y-4">
                    <h1 className="text-3xl font-bold text-black">{singleData?.data?.name}</h1>
                    <p className="text-lg text-gray-600">Brand: {singleData?.data?.brand}</p>
                    <p className="text-lg text-gray-600">Category: {singleData?.data?.category}</p>
                    <p className="text-lg text-gray-600">quantity: {singleData?.data?.quantity}</p>
                    <p className="text-lg text-gray-600">Price: {singleData?.data?.price} (per pack)</p>
                    <p className="text-lg text-gray-600">inStock: {singleData?.data?.inStock ? "Yes" : "No"}</p>
                    <p className="text-lg text-gray-600">{singleData?.data?.description}</p>
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
                        <label className="block text-sm font-semibold">Phone Number </label>
                        <input
                            type="text"
                            {...register('number', { required: 'Number is required' })}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        />
                        {errors.number && <p className="text-red-500 text-sm">{errors.number.message?.toString()}</p>}
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
