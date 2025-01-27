
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSingleUserQuery, useUpdateProfileMutation } from "../../Redux/Feature/authApi";
import { useAppSelector } from "../../Redux/hook";
import { useEffect } from "react";

import { toast } from "sonner";

const UpdateProfile = () => {
    const email=useAppSelector((state)=>state.auth.user?.email)
    const {data}=useSingleUserQuery(email)

    const [UpdateProfile]=useUpdateProfileMutation()
    console.log(data?.data?.name)



    const {
        register,
        handleSubmit,
        reset,
        setValue
    } = useForm();

    useEffect(()=>{
        setValue("name",data?.data?.name)
        setValue("address",data?.data?.address || 'set Address')

    },[data,email,setValue])

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        console.log("Updated Profile Data:", data);
        // Add your API call or update logic here
        const idToast = toast.loading("Updating...");
        try {
            const datas = {
                id: email,
                data: { ...data }
            }
            console.log(datas)
            const result = await UpdateProfile(datas).unwrap();
            if (result) {
                toast.success(result.message, { id: idToast });
                reset();
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.data.message, { id: idToast });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Update Your Profile
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name",)}
                            placeholder="Enter your name"
                            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2`}
                        />
                       
                    </div>

                    {/* Address Field */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Address
                        </label>
                        <textarea
                            id="address"
                            {...register("address")}
                            placeholder="Enter your address"
                            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 `}
                            rows={4}
                        ></textarea>
                       
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-medium py-2 px-4 rounded-lg shadow-md  focus:outline-none focus:ring-2 "
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
