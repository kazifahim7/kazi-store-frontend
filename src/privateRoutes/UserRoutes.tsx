import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/hook";
import { ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

const UserRoutes = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector((state) => state.auth.token)
    let role;
    if (token) {
        const decoded = jwtDecode<{ role: string }>(token);
        role = decoded.role
    }






    if (role !== undefined && role !== "user") {

        return <Navigate to="/login" replace={true} />;
    }

    if (!token) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }

    return children;

};

export default UserRoutes;