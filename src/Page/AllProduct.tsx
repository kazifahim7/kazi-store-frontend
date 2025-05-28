import { FaSearch, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAllProductsQuery } from "../Redux/Feature/ProductApi";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoProduct from "../Components/NoProduct";

const AllProduct = () => {
    const [searchText, setSerchText] = useState("");
    const [filter, setFilter] = useState<{ name: string; value: string }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category");

    useEffect(()=>{
        if(category){
            setFilter([{name:"category",value:category}])
        }
    },[category])
 
    const { data: allProduct, isLoading, isFetching } = useAllProductsQuery([
        { name: "searchTerm", value: searchText },
        ...filter,
    ]);

    // Skeleton loader component
    const ProductSkeleton = () => (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 animate-pulse">
            <div className="lg:max-w-xs w-full h-72 bg-gray-200 rounded-t-md dark:bg-gray-300"></div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4 dark:bg-gray-300"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 dark:bg-gray-300"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3 dark:bg-gray-300"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded-2xl dark:bg-gray-300"></div>
            </div>
        </div>
    );

    const handleReset = () => {
        setSerchText("");
        setFilter([]);
        setCurrentPage(1);
    };

    // Pagination logic
    const products = allProduct?.data?.result || [];
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="md:max-w-7xl mx-auto">
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="w-full md:w-2/3 relative">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSerchText(e.target.value)}
                        placeholder="Search products..."
                        className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>

                <div className="w-full md:w-2/3">
                    <select
                        onChange={(e) => {
                            setFilter([{ name: "category", value: e.target.value }]);
                            setCurrentPage(1);
                        }}
                   
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">{ category ? category : "Filter by category"}</option>
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 pt-10 px-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
                {isLoading || isFetching ? (
                    // Show skeleton loaders while loading
                    Array.from({ length: itemsPerPage }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))
                ) : currentProducts.length === 0 ? (
                    <NoProduct />
                ) : (
                    currentProducts.map((item: { _id: string; img: string; name: string; brand: string; price: string }) => (
                        <div key={item._id} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img
                                src={item?.img}
                                alt={item.name}
                                className="lg:max-w-xs object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                            />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">{item?.name}</h2>
                                    <p className="dark:text-gray-800">Brand : {item?.brand}</p>
                                    <p className="dark:text-gray-800">Price : {item?.price}</p>
                                </div>
                                <Link
                                    to={`/details/${item._id}`}
                                    type="button"
                                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-2xl dark:bg-orange-500 dark:text-gray-50"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            {!isLoading && !isFetching && totalItems > itemsPerPage && (
                <div className="flex justify-center mt-10 mb-10">
                    <nav className="flex items-center gap-2">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FaAngleLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === number ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FaAngleRight className="w-5 h-5" />
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default AllProduct;