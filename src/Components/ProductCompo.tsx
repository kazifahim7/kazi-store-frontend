import { Link } from "react-router-dom";
import { useAllProductsQuery } from "../Redux/Feature/ProductApi";

const ProductCompo = () => {
    const { data: allProduct, isLoading } = useAllProductsQuery([]);

    // Skeleton loader component
    const ProductSkeleton = () => (
        <div className="md:max-w-[330px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 animate-pulse">
            <div className="w-full h-72 bg-gray-200 rounded-t-md dark:bg-gray-300"></div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-3">
                    <div className="h-7 bg-gray-200 rounded w-3/4 dark:bg-gray-300"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2 dark:bg-gray-300"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/3 dark:bg-gray-300"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded-2xl dark:bg-gray-300"></div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-5xl font-bold text-center">Product</h1>
            <p className="text-center py-5">We offer the finest quality stationery, tailored to meet your every need.</p>

            <div className="grid grid-cols-1 pt-10 px-5 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
                {isLoading ? (
                    // Show 6 skeleton loaders while loading
                    Array.from({ length: 6 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))
                ) : (
                    allProduct?.data?.result.slice(0, 6).map((item: { _id: string, img: string, name: string, brand: string, price: string }) => (
                        <div key={item._id} className="md:max-w-[330px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img
                                src={item?.img}
                                alt={item.name}
                                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                            />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">{item?.name}</h2>
                                    <p className="dark:text-gray-800">Brand : {item?.brand}</p>
                                    <p className="dark:text-gray-800">Price : {item?.price}</p>
                                </div>
                                <Link
                                    to={`details/${item._id}`}
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
        </div>
    );
};

export default ProductCompo;