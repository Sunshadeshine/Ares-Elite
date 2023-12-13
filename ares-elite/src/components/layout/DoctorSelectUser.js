import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DoctorSelectUser = () => {
  const [selectedUserType, setSelectedUserType] = useState("");

  const handleSubmit = () => {};
  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
  };
  return (
    <>
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center "
        style={{ gap: "24px", width: "40%" }}
      >
        <img src="images/areseliteLogo.png" width={100} alt="logo" />
        <h5>Please select Type of user</h5>

        <div
          className="d-flex flex-wrap justify-content-center "
          style={{ gap: "24px" }}
        >
          <button
            className={`doctor-user-type ${
              selectedUserType === "New" ? "selected" : ""
            }`}
            onClick={() => handleUserTypeChange("New")}
          >
            New
          </button>
          <button
            className={`doctor-user-type ${
              selectedUserType === "Existing" ? "selected" : ""
            }`}
            onClick={() => handleUserTypeChange("Existing")}
          >
            Existing
          </button>
        </div>
        <Button
          onClick={handleSubmit}
          className="purple-button "
          style={{ width: "332px", height: "62px" }}
        >
          Continue
        </Button>
      </section>
    </>
  );
};

export default DoctorSelectUser;
