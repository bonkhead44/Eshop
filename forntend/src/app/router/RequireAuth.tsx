import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import { toast } from "react-toastify";

export default function RequireAuth(){
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    if (!user) {
        toast.error('You need to be logged in to do that!');
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }

    return <Outlet></Outlet>
}