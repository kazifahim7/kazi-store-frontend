import axios from "axios";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa6";
import { toast } from "sonner";
import {  useNavigate, useParams } from "react-router-dom";
import { useSingleProductQuery, useUpdateProductMutation } from "../../Redux/Feature/ProductApi";


const UpdateProduct = () => {
    const { id } = useParams(); 
    const { register, handleSubmit, reset, setValue, } = useForm();
    const { data: product, isLoading, error } = useSingleProductQuery(id); 
    const [updateProduct] = useUpdateProductMutation();

    const navigate=useNavigate()

   
      
    useEffect(() => {
        if (product) {
            // Pre-fill form values with product data
            setValue("name", product?.data?.name);
            setValue("brand", product?.data?.brand);
            setValue("price", product?.data?.price);
            setValue("category", product?.data?.category);
            setValue("description", product?.data?.description);
            setValue("quantity", product?.data?.quantity);
        }
    }, [product, setValue]);

    const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
        const image = e?.target.img.files[0];
        const formData = new FormData();
        if (image) {
            formData.append("image", image);

            // Upload new image to imageBB
            try {
                const imageResponse = await axios.post(
                    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_KEY}`,
                    formData
                );
                data.img = imageResponse.data.data.display_url; // Set new image URL
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                toast.error("Image upload failed");
                return;
            }
        }

        data.quantity = Number(data.quantity);
        data.price = Number(data.price);

        const idToast = toast.loading("Updating...");
        try {
            const datas={
                id:id,
                data:{...data}
            }
            console.log(datas)
            const result = await updateProduct(datas).unwrap();
            if (result) {
                toast.success(result.message, { id: idToast });
                navigate('/dashBoard/all-products')
                reset();
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error.data.message, { id: idToast });
        }
    };

    if (isLoading) {
        return <h1 className="text-center"><span className="loading loading-spinner loading-lg "></span></h1>
    }
    if (error) return <p>Error loading product</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Update Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Product Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    
                </div>

                {/* Brand */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Brand</label>
                    <input
                        type="text"
                        {...register("brand")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    
                </div>

                {/* Price */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Price</label>
                    <input
                        type="number"
                        {...register("price")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Category</label>
                    <select
                        {...register("category")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        <option value="">Select a category</option>
                        <option value="file">File</option>
                        <option value="ball pen">Ball Pen</option>
                        <option value="sticker">Sticker</option>
                        <option value="color pencil">Color Pencil</option>
                        <option value="eraser">Eraser</option>
                    </select>
                   
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Description</label>
                    <textarea
                        {...register("description")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    ></textarea>
                  
                </div>

                {/* Quantity */}
                <div>
                    <label className="block mb-2 text-sm font-semibold">Quantity</label>
                    <input
                        type="number"
                        {...register("quantity")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    
                </div>

                {/* Image */}
                <div className="space-y-2">
                    <label className="block text-lg font-semibold text-gray-700">Product Image</label>
                    <div className="flex items-center border-2 border-gray-300 rounded-md bg-white p-2">
                        <FaUpload className="text-gray-500 mr-2" />
                        <input
                            name="img"
                            type="file"
                            className="w-full py-2 px-4 border-none bg-transparent text-gray-700 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-orange-600 text-white rounded-lg shadow-md focus:ring"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
