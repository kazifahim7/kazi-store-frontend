import BussinessConnection from "../Components/BussinessConection";
import ClientComment from "../Components/ClientComment";
import Header from "../Components/Header";
import Sponser from "../Components/Sponser";
import Success from "../Components/success";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Success></Success>
            <ClientComment></ClientComment>
            <Sponser></Sponser>
            <BussinessConnection></BussinessConnection>
            
        </div>
    );
};

export default Home;