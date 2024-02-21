import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="background-auth">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <main className="sign-in-container">{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
