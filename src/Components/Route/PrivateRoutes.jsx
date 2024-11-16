import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../Provider/AuthContext";


const PrivateRoutes = ({ children }) => {

    const { user, isLoading } = useContext(Context)
    const location = useLocation()


    if (isLoading) {
        return <span className="loading loading-spinner loading-lg text-primary"></span>
    }
    if (user && !isLoading) {
        return children
    }
    return <Navigate to={"/signIn"} state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;