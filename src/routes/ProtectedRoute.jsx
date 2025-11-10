import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
