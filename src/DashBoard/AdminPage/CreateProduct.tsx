
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa6';
import { toast } from 'sonner';
import { useCreateProductMutation } from '../../Redux/Feature/ProductApi';

const CreateProduct = () => {
    const { register, handleSubmit,reset,   formState: { errors } } = useForm();
    const [createProduct] = useCreateProductMutation()
    

    const onSubmit:SubmitHandler<FieldValues> =async (data,e) => {
        const image=e?.target.img.files[0]
        
        const formData = new FormData()
        formData.append("image",image)


        // send to image BB

       

        const id = toast.loading("creating...")
        try {

            const imageResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_KEY}`,
                formData
            );
            const imageUrl = imageResponse.data.data.display_url
            console.log(imageUrl)



            data.img=imageUrl
            data.quantity = Number(data.quantity)
            data.price = Number(data.price)
            
            






            const result = await createProduct(data).unwrap()
            if (result) {
                toast.success(result.message, { id })
                reset()
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id })
        }


        
        
      
        
    };

   

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Add a New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Product Name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Product name is required' })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
                </div>

                {/* Brand */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Brand</label>
                    <input
                        type="text"
                        {...register('brand', { required: 'Product brand is required' })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message?.toString()}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Price</label>
                    <input
                        type="number"
                        {...register('price', { required: 'Product price is required' })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message?.toString()}</p>}
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Category</label>
                    <select
                        {...register('category')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        <option value="">Select a category</option>
                        <option value="file">File</option>
                        <option value="ball pen">Ball Pen</option>
                        <option value="sticker">Sticker</option>
                        <option value="color pencil">Color Pencil</option>
                        <option value="eraser">Eraser</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message?.toString()}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Description</label>
                    <textarea
                        {...register('description', { required: 'Product description is required' })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message?.toString()}</p>}
                </div>

                {/* Quantity */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Quantity</label>
                    <input
                        type="number"
                        {...register('quantity', { required: 'Product quantity is required' })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message?.toString()}</p>}
                </div>

                {/* In Stock */}


                {/* Image */}
                <div className="space-y-2">
                    <label className="block text-lg font-semibold text-gray-700">Product Image</label>
                    <div className="flex items-center border-2 border-gray-300 rounded-md bg-white p-2">
                        <FaUpload className="text-gray-500 mr-2" />
                        <input
                            name='img'
                            type="file"
                            className="w-full py-2 px-4 border-none bg-transparent text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-orange-600 text-white rounded-lg shadow-md  focus:ring "
                >
                   Create
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
