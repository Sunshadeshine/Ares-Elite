import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AuthLayout from "../AuthLayout";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [cnfmPassword, setCnfmPassword] = useState("");

  return (
    <AuthLayout>
      <section className="forgot-password">
        <h3 className="mb-4 font-weight-bold">Change Password</h3>
        <p className="mb-1 mt-4 email ml-1">
          Type your new password to continue
        </p>
        <Form>
          <Form.Control
            type="password"
            name="password"
            placeholder=" New password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="mb-3"
          />
          <Form.Control
            type="password"
            name="cnfmPassword"
            placeholder="Confirm password"
            onChange={(e) => {
              setCnfmPassword(e.target.value);
            }}
            value={cnfmPassword}
            className="mb-3"
          />

          <button type="submit" className="purple-button w-100">
            Change Password{" "}
          </button>
        </Form>
      </section>
      <section className="illustration-container">
        <img
          src="images/UpdatePassword.png"
          className="illustration"
          style={{ width: "auto", height: "200px" }}
        />
      </section>
    </AuthLayout>
  );
};

export default UpdatePassword;
