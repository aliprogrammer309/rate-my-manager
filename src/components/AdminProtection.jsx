import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const AdminProtection = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (user?.uid !== "bl49RoDkz5QrrPmAxsEdhNYYKYH2") {
    return <Navigate to="/" />;
  }
  return children;
};

export default AdminProtection;