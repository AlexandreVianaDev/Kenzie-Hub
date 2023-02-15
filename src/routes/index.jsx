import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../pages/ProtectedRoutes";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRoute;
