import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hook";
import { Navigate } from "react-router-dom";



const Protected = ({children}:{children:ReactNode}) => {
    const token= useAppSelector((state)=>state.auth.token)

    if(token){
        return children
    }else{
        return <Navigate to={'/login'} replace={true}></Navigate>
    }
   
};

export default Protected;