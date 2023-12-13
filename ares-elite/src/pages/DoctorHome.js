import React from "react";

import DoctorMenu from "../components/layout/DoctorMenu";
import DoctorServices from "../components/layout/DoctorServices";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
const DoctorSelectUserType = () => {
  return (
    <DoctorMenu>
      <div className="d-flex Doctor-home justify-content-between flex-wrap">
        {/* <DoctorSelectUser /> */}
        <DoctorServices />

        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default DoctorSelectUserType;
