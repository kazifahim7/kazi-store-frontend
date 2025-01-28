import { Link } from "react-router-dom";
import { useAllProductsQuery } from "../Redux/Feature/ProductApi";


const ProductCompo = () => {

    const {data:allProduct,isLoading}=useAllProductsQuery([])

    console.log(allProduct?.data?.result)


    if(isLoading){
        return <h1 className="text-center"><span className="loading loading-spinner loading-lg "></span></h1>
    }



    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className=" text-5xl font-bold  text-center">Product</h1>
            <p className="text-center py-5">We offer the finest quality stationery, tailored to meet your every need.</p>

            <div className="grid grid-cols-1 pt-10 px-5 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
               {
                    allProduct?.data?.result.slice(0, 6).map((item : {_id:string,img:string,name:string,brand:string,price:string}) => <div key={item._id} className="md:max-w-[330px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={item?.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold ">{item?.name}</h2>
                                <p className="dark:text-gray-800">Brand : {item?.brand}</p>
                                <p className="dark:text-gray-800">Price : {item?.price}</p>
                            </div>
                            <Link to={`details/${item._id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-2xl dark:bg-orange-500 dark:text-gray-50">Details</Link>
                        </div>
                    </div>)
               }
            </div>
            
        </div>
    );
};

export default ProductCompo;