import { useUser } from "../features/auth/useUser";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );

  if (isAuthenticated) return <Outlet></Outlet>;

  return null;
}

export default ProtectedRoute;
