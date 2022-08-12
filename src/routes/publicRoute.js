import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "src/contexts/userContext";

const PublicRoute = ({ children }) => {
  const { isLogin } = useContext(UserContext);

  if (isLogin) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default PublicRoute;
