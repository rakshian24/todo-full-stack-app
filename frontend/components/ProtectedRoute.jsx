import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../common/slices";
import { ROUTES } from "../constants";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
export default ProtectedRoute;
