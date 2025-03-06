import { useUser } from "../features/auth/useUser";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

// eslint-disable-next-line react/prop-types
function ProtectedRoute() {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return <LoadingSpinner size={16} fullPage={true}></LoadingSpinner>;

  if (isAuthenticated) return <Outlet></Outlet>;

  return null;
}

export default ProtectedRoute;
