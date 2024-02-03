import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DoctorMonthlyPackagePlans from "./DoctorPlans_Monthly_Package";

const DoctorInOffice = ({ navigate }) => {
  useEffect(() => {
    // Check if selectedService is empty in localStorage
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
    } else {
      navigate("/doctor/dashboard/doctor-service-selection");
    }
  }, [navigate]);
  const { isFetching } = useSelector((state) => state.auth);
  const [selectedInOfficeType, setSelectedInOfficeType] = useState("");
  const [showDoctorMonthly, setShowDoctorMonthly] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setShowDoctorMonthly(true);
  };

  const handleInOfficeTypeChange = (event) => {
    setSelectedInOfficeType(event.target.value);
  };
  return (
    <>
      {showDoctorMonthly ? (
        <>
          <DoctorMonthlyPackagePlans type={selectedInOfficeType} />
        </>
      ) : (
        <>
          <section
            className="text-center d-flex flex-column justify-content-center align-items-center select-user"
            style={{ gap: "3vh", width: "40%" }}
          >
            <img src="/images/areseliteLogo.png" width={100} alt="logo" />
            <h5>Select Type of Plan</h5>
            <Form
              className="d-flex flex-wrap justify-content-center "
              style={{ gap: "24px" }}
              onSubmit={handleSubmit}
            >
              <Form.Check
                type="radio"
                id="monthly"
                label="Monthly"
                value="Monthly"
                checked={selectedInOfficeType === "Monthly"}
                onChange={handleInOfficeTypeChange}
                className={`doctor-user ${
                  selectedInOfficeType === "Monthly" ? "checked" : ""
                }`}
              />
              <Form.Check
                type="radio"
                id="Packages"
                label="Packages"
                value="Packages"
                checked={selectedInOfficeType === "Packages"}
                onChange={handleInOfficeTypeChange}
                className={`doctor-user ${
                  selectedInOfficeType === "Packages" ? "checked" : ""
                }`}
              />
              <Button
                type="submit"
                className="purple-button "
                style={{ width: "332px", height: "62px" }}
                disabled={!selectedInOfficeType}
              >
                Continue
              </Button>
            </Form>
          </section>
        </>
      )}
    </>
  );
};

export default DoctorInOffice;
