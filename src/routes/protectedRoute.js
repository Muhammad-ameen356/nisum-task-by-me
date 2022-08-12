import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "src/contexts/userContext";

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useContext(UserContext);

  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
