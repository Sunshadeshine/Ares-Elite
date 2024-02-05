import React from "react";
import { Col, Row } from "react-bootstrap";

const AuthLayout = ({ children }) => {
  return (
    <div className="">
      <Row>
        <Col
          sm={12}
          md={3}
         
          className="auth-layout auth-img-cont"
        >
          <img
            className="w-100 vh-100"
            src="images/loginDoctor.png"
            alt="Ares Elite"
          />
        </Col>
        <Col sm={12} md={9} >
          <div className="d-flex align-items-center justify-content-center vh-100 p-4">
            <main className="sign-in-container">{children}</main>
            {/* <ToastContainer position="top-center" /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
