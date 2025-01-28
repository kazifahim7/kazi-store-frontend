import { FaSearch } from "react-icons/fa";
import { useAllProductsQuery } from "../Redux/Feature/ProductApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoProduct from "../Components/NoProduct";



const AllProduct = () => {
    
    const [searchText,setSerchText]=useState("")
    const [filter, setFilter] = useState<{ name: string; value: string; }[]>([])
    const { data: allProduct,isLoading } = useAllProductsQuery([{ name: "searchTerm", value: searchText },...filter])
   
     if(isLoading){
        return <p className="text-center font-bold tex-xl">loading....</p>
     }
   console.log(searchText)

    const handleReset = () => {
        setSerchText("");
        setFilter([]);
    };

   
    return (
        <div className="md:max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                {/* Search Field */}
                <div className="w-full md:w-2/3 relative">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e)=>setSerchText(e.target.value)}
                        placeholder="Search products..."
                        className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                   
                </div>

                {/* Filter Dropdown */}
                <div className="w-full md:w-2/3">
                    <select
                        onChange={(e) => setFilter([{ name: "category", value: e.target.value }])}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Filter by category</option>
                        <option value="file">File</option>
                        <option value="ball pen">Ball Pen</option>
                        <option value="sticker">Sticker</option>
                        <option value="color pencil">Color Pencil</option>
                        <option value="eraser">Eraser</option>
                    </select>
                </div>

                <div className="w-full md:w-1/3 flex justify-end">
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 pt-10 px-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
                {
                    allProduct?.data?.result.length === 0 ? <NoProduct></NoProduct> : allProduct?.data?.result.slice(0, 6).map((item: { _id: string, img: string, name: string, brand: string, price: string }) => <div key={item._id} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={item?.img} alt="" className=" lg:max-w-xs object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold ">{item?.name}</h2>
                                <p className="dark:text-gray-800">Brand : {item?.brand}</p>
                                <p className="dark:text-gray-800">Price : {item?.price}</p>
                            </div>
                            <Link to={`/details/${item._id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-2xl dark:bg-orange-500 dark:text-gray-50">Details</Link>
                        </div>
                    </div>)
                }
            </div>




        </div>
    );
};

export default AllProduct;