import BussinessConnection from "../Components/BussinessConection";
import CategoryCards from "../Components/Category";
import ClientComment from "../Components/ClientComment";
import Discount from "../Components/Discount";
import Header from "../Components/Header";
import ProductCompo from "../Components/ProductCompo";
import Sponser from "../Components/Sponser";
import Success from "../Components/success";


const Home = () => {
    return (
        <div className="">
            <Header></Header>

            <CategoryCards></CategoryCards>
            <ProductCompo></ProductCompo>

            <Discount></Discount>

            <Success></Success>
            <ClientComment></ClientComment>
            <Sponser></Sponser>
            <BussinessConnection></BussinessConnection>
            
        </div>
    );
};

export default Home;