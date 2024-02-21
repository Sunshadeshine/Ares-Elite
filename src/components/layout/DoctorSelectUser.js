import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VerifyAthelete } from "../../features/apiCall";
import "../../styles/modal.css";

const DoctorSelectUser = () => {
  const { isFetching } = useSelector((state) => state.auth);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false); // Track form submission success

  useEffect(() => {
    localStorage.removeItem("selectedService");
    localStorage.removeItem("client_id");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedUserType === "New") {
      navigate("/doctor/dashboard/client_form");
    } else if (selectedUserType === "Existing") {
      console.log("modal opened for verification");
      setSuccess(true);
    }
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleVerification = async (email) => {
    console.log(email);
    try {
      const success = await VerifyAthelete(dispatch, { email });
      if (success) {
        navigate("/doctor/dashboard/doctor-service-selection");
      }
    } catch (error) {
      alert(error);
    }
    setShowModal(false); // Close the modal after verification
  };

  return (
    <>
      <section className="text-center d-flex flex-column justify-content-center align-items-center select-user h-100">
        {success ? (
          <SucessContent
            handleVerification={handleVerification}
            className="verification-athelete"
          />
        ) : (
          <>
            <div className="text-left" style={{ width: "400px" }}>
              <h4 style={{ fontWeight: "700" }}>Select User</h4>
              <p className="text-muted">
                Please select Type of user that you want to treat
              </p>
            </div>

            <Form
              className="d-flex flex-wrap justify-content-center "
              style={{ gap: "30px" }}
              onSubmit={handleSubmit}
            >
              <div className="radio-container">
                <label
                  htmlFor="newUser"
                  className={`radio-label ${
                    selectedUserType === "New" ? "checked" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="newUser"
                    value="New"
                    checked={selectedUserType === "New"}
                    onChange={handleUserTypeChange}
                  />
                  New Users
                </label>

                <label
                  htmlFor="existingUser"
                  className={`radio-label ${
                    selectedUserType === "Existing" ? "checked" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="existingUser"
                    value="Existing"
                    checked={selectedUserType === "Existing"}
                    onChange={handleUserTypeChange}
                  />
                  Existing Users
                </label>
              </div>
              <Button
                type="submit"
                className="purple-button "
                style={{ width: "332px", height: "62px", marginTop: "26px" }}
                disabled={!selectedUserType}
              >
                Continue
              </Button>
            </Form>
          </>
        )}
      </section>
    </>
  );
};

export default DoctorSelectUser;

const SucessContent = ({ handleVerification, className }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { isFetching } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerification(email);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleGoBack} className="m-2 p-0 mb-4 " id="back_bt">
        <img src="/images/icon/back.svg" alt="back" width={30} />
      </button>
      <section className={className}>
        <div className="text-left" style={{ width: "400px" }}>
          <h4 style={{ fontWeight: "700" }}>Verify User</h4>
          <p className="text-muted">
            Please enter email to verify a existing user{" "}
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Existing Email ID"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mb-3 "
          />
          <div className="d-flex">
            <button type="submit" className="bt-2 w-50 bt-3">
              {isFetching ? (
                <>
                  <Spinner size="sm" animation="border" />
                </>
              ) : (
                <>Verify</>
              )}
            </button>{" "}
            <button type="button" className="bt-2 w-50">
              Cancel
            </button>
          </div>
        </Form>
      </section>
    </>
  );
};
