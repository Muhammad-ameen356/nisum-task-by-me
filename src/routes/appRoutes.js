import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import About from "src/pages/about";
import Error from "src/pages/error";
import NavbarComponent from "src/components/Navbar/Navbar";
import { CounterProvider } from "src/contexts/counterContext";
import { PostProvider } from "src/contexts/postContext";
import { UserProvider } from "src/contexts/userContext";
import ProtectedRoute from "./protectedRoute";
import Signup from "src/pages/signup";
import Login from "src/pages/login";
import PublicRoute from "./publicRoute";
import StepForm from "src/pages/stepForm";

const AppRoutes = () => {
  return (
    <UserProvider>
      <CounterProvider>
        <PostProvider>
          <Routes>
            <Route index element={<StepForm />} />
            <Route path="/home" element={<NavbarComponent />}>
              <Route index element={<Home />} />
            </Route>

            <Route
              path="signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </PostProvider>
      </CounterProvider>
    </UserProvider>
  );
};

export default AppRoutes;
