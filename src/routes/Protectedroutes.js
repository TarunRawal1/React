import React from "react";
import { Navigate } from "react-router-dom";

export const Protectedroutes = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("accessToken"));
  return token ? children : <Navigate to="/login" />;
};
