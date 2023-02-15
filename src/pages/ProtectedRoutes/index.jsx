import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const tokenLS = localStorage.getItem("@TOKEN");

  return <>{user || tokenLS ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
