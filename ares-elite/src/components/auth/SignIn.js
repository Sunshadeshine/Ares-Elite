import React, { useState } from "react";
import { Button, Form, FormCheck } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false, // Added state for toggling password visibility
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login logic goes here:", values);
  };
  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <h3 className="mb-5 font-weight-bold">Log in for Ares Elite</h3>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={values.email}
          className="mb-3"
        />
        <Form.Control
          type={values.showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={values.password}
          className="mb-3"
        />
        <Button
          variant="link"
          className="text-decoration-none"
          onClick={handleTogglePassword}
        >
          {values.showPassword ? "Hide" : "Show"} Password
        </Button>
        <NavLink
          className="d-block w-100 text-right mb-2 text-decoration-none"
          to="/forgot-password"
        >
          Forgot Password ?
        </NavLink>
        <FormCheck
          type="checkbox"
          id="default-checkbox"
          label="By signing up, you agree to our Terms and have read and acknowledge the Privacy Policies."
          className="mb-4 mt-4"
        />

        <Button type="submit" className="purple-button w-100">
          Login
        </Button>
      </Form>
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

export default SignIn;
