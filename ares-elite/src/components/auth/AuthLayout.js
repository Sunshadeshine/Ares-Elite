import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Row>
        <Col sm={12} md={4} style={{ flexBasis: "calc(25% - 10px)" }}>
          <img
            className="w-100 vh-100"
            src="images/loginDoctor.png"
            alt="Ares Elite"
          />
        </Col>
        <Col sm={12} md={8} style={{ flexBasis: "calc(75% - 10px)" }}>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <main style={{ width: "407px" }}>{children}</main>
            <ToastContainer position="top-center" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
