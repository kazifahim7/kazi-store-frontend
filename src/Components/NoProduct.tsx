
const NoProduct = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-10">
                <img
                    src="https://i.postimg.cc/44PMXY0H/no-products-found.png"
                    alt="No products found"
                    className="w-32 h-32 mb-6"
                />
                <h2 className="text-3xl font-bold text-gray-700">No Products Found</h2>
                <p className="text-lg text-gray-500">We couldn't find any products matching your search or filter criteria.</p>
               
            </div>
        </div>
    );
};

export default NoProduct;