import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import UserState from "../interface/UserState";

function PrivateRoute() {
  const loginState = useSelector<UserState>((state) => state.isSubmitting);
  return loginState ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;
