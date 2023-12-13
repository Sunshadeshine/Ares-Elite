import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import BootstrapModal from "../../layout/BootstrapModal";
import AuthLayout from "../AuthLayout";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSendOtp = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <AuthLayout>
      <section className="forgot-password">
        <h3 className="mb-4 font-weight-bold">Forgot Password</h3>
        <p className="mb-1 mt-4 email ml-1">
          Email to send reset instructions to
        </p>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          className="mb-3 "
        />
        <Button className="purple-button w-100" onClick={handleSendOtp}>
          Next
        </Button>
      </section>
      <section className="illustration-container">
        <img
          src="images/ForgotPassword.png"
          className="illustration"
          style={{ width: "300px", height: "auto" }}
        />
      </section>

      <BootstrapModal
        showModal={showModal}
        handleClose={handleClose}
        modalTitle={""}
        modalContent={<ModalContent />}
        className="check_your_modal_container"
      />
    </AuthLayout>
  );
};

export default ForgotPassword;

const ModalContent = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if the current one is filled
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };
  return (
    <section className="check-your-inbox">
      <i className="fa fa-envelope" aria-hidden="true" />
      <div className="d-flex check-your-box-texts">
        <h5>Check Your Inbox</h5>
        <p>
          Please open the link in the email to continue <br />
          or Enter the verification code we sent to{" "}
        </p>
        <h6>emmawatson@gmail.com</h6>
      </div>

      {/* <Form.Control /> */}
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="otp-input m-3"
          />
        ))}
      </div>
      <p>Resend (60s)</p>
      <p>Need Help</p>
      <button type="submit" className="purple-button w-50">
        Update Password{" "}
      </button>
    </section>
  );
};
