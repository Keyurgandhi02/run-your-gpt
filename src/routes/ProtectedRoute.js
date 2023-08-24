import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { user_local_auth } from "../config/global";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();

  // Get user details from localstorage
  const user = JSON.parse(localStorage.getItem(user_local_auth));

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
