import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import UserState from "../interface/UserState";

// interface PrivateRouteProps {
//   loginState: boolean;
// }

function PrivateRoute() {
  // const { getItem } = useLocalStorageState();

  const loginState = useSelector<UserState>((state) => state.isSubmitting);
  // const loginState = getItem("UserProfile(isSubmitting)");
  // useEffect(() => {
  //   setItem("Logged-In-State", JSON.stringify(loginState));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loginState]);
  return loginState ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
