import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const DoctorMonthlyPlans = ({ navigate, type }) => {
  const [showMonthlyPlans, setShowMonthlyPlans] = useState(false);
  const { isFetching } = useSelector((state) => state.auth);
  const [plans, setplans] = useState([]);
  const [selectedMonthlyPlans, setSelectedMonthlyPlans] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert(selectedMonthlyPlans);
  };

  const handleMonthlyPlansChange = (event) => {
    setSelectedMonthlyPlans(event.target.value);
  };
  useEffect(() => {
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
    } else {
      // If empty, navigate to the desired page
      navigate("/doctor/dashboard/doctor-service-selection");
    }
    if (plans === "Monthly") setplans(monthlyPlansOptions);
    else if (plans === "Package") {
      setplans(packagePlansOptions);
    } else {
      setplans(monthlyPlansOptions);
    }
  }, []);

  const monthlyPlansOptions = [
    {
      id: "2-sessions",
      label: "2 Sessions Per month",
      value: "2SessionsPermonth",
    },
    {
      id: "4-sessions",
      label: "4 Sessions Per month",
      value: "4SessionsPermonth",
    },

    {
      id: "8-sessions",
      label: "8 Sessions Per month",
      value: "8SessionsPermonth",
    },
  ];
  const packagePlansOptions = [
    {
      id: "5-sessions",
      label: "5 Sessions Per month",
      value: "5SessionsPermonth",
    },

    {
      id: "10-sessions",
      label: "10 Sessions Per month",
      value: "10SessionsPermonth",
    },
    {
      id: "15-sessions",
      label: "15 Sessions Per month",
      value: "15SessionsPermonth",
    },
    {
      id: "20-sessions",
      label: "20 Sessions Per month",
      value: "20SessionsPermonth",
    },
  ];
  return (
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
          {plans.map((option) => (
            <Form.Check
              key={option.id}
              type="radio"
              id={option.id}
              label={option.label}
              value={option.value}
              checked={selectedMonthlyPlans === option.value}
              onChange={handleMonthlyPlansChange}
              className={`doctor-user ${
                selectedMonthlyPlans === option.value ? "checked" : ""
              }`}
            />
          ))}
          <Button
            type="submit"
            className="purple-button "
            style={{ width: "332px", height: "62px" }}
            disabled={!selectedMonthlyPlans}
          >
            Continue
          </Button>
        </Form>{" "}
      </section>
    </>
  );
};

export default DoctorMonthlyPlans;
