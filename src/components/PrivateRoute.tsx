import { Navigate, Outlet } from "react-router-dom";
type PrivateRouteProps={
  path:string,
  loginState:boolean

}
function PrivateRoute({ path, loginState }: PrivateRouteProps) {
  return loginState ? <Outlet /> : <Navigate to={path} />;
}

export default PrivateRoute;
