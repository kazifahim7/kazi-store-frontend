const Discount = () => {
    return (
        <div
            className=" bg-cover bg-right bg-fixed my-10 h-[300px]  md:h-[500px] bg-no-repeat  flex items-center justify-end"
            style={{
                backgroundImage: `url('https://i.postimg.cc/bJbbH27H/1905-sm002-006-Back-to-school.jpg')`,
                
            }}
        >
            <div className=" bg-opacity-50 text-black p-6 rounded-lg text-center lg:mr-24">
                <h1 className="text-4xl font-bold mb-2">Back to School Sale!</h1>
                <p className="text-lg mb-4">Get up to 50% off on selected items.</p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Discount;
