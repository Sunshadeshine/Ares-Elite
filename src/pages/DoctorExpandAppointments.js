import React from "react";
import DoctorMenu from "../components/layout/DoctorMenu";

const DoctorExpandAppointments = () => {
  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-2 booking-presc">
        <div className="frame ">
          <div
            className="recent-booking-head "
            style={{ height: "95vh", borderRadius: "20px" }}
          ></div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default DoctorExpandAppointments;
