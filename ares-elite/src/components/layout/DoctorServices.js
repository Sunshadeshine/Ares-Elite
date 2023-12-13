import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const DoctorServices = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = () => {
    // Add any logic needed when the form is submitted
    console.log("Selected Service:", selectedService);
    // Add additional logic or state updates as needed
  };

  return (
    <>
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center doctor-service-container "
        style={{ gap: "24px", width: "40%" }}
      >
        <img src="images/areseliteLogo.png" width={100} alt="logo" />
        <h5>Select type of Service</h5>

        <Form
          className="d-flex flex-wrap justify-content-center "
          style={{ gap: "24px" }}
        >
          <Form.Check
            type="radio"
            name="service"
            id="consultation"
            label="Consultation Call with Dr. LaPlaca"
            onChange={() => handleServiceChange("Consultation")}
            checked={selectedService === "Consultation"}
            className={`doctor-services ${
              selectedService === "Consultation" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="service"
            id="sportsVision"
            label="Sports Vision Performance Evaluation - In Office"
            onChange={() => handleServiceChange("SportsVision")}
            checked={selectedService === "SportsVision"}
            className={`doctor-services ${
              selectedService === "SportsVision" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="service"
            id="eliteAcademy"
            label="Ares Elite Academy - Online Only"
            onChange={() => handleServiceChange("EliteAcademy")}
            checked={selectedService === "EliteAcademy"}
            className={`doctor-services ${
              selectedService === "EliteAcademy" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="service"
            id="glassesExam"
            label="Glasses/Contact Lens Examination"
            onChange={() => handleServiceChange("GlassesExam")}
            checked={selectedService === "GlassesExam"}
            className={`doctor-services ${
              selectedService === "GlassesExam" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="service"
            id="concussionEval"
            label="Post-Concussion Evaluation"
            onChange={() => handleServiceChange("ConcussionEval")}
            checked={selectedService === "ConcussionEval"}
            className={`doctor-services ${
              selectedService === "ConcussionEval" ? "checked" : ""
            }`}
          />
        </Form>
        <Button
          onClick={handleSubmit}
          className="purple-button"
          style={{ width: "332px", height: "62px" }}
          disabled={!selectedService}
        >
          Continue
        </Button>
      </section>
    </>
  );
};

export default DoctorServices;
