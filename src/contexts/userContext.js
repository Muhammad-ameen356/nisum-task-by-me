import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const login = (email, password) => {
    if (email === "ameen" && password === "12345") {
      setIsLogin(true);
      navigate("/");
      toast.success("Login Successfull");
    } else {
      setIsLogin(false);
      toast.error("Invalid Credential");
    }
  };

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
