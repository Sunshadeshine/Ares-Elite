import React from "react";
import DoctorMenu from "../components/layout/DoctorMenu";

const DoctorOnlineAca = () => {
  return (
    <DoctorMenu>
      <section className="text-center w-100 vh-100 ">
        <h2 className=" pt-5">
          <span> Powerful features for</span>
          <br /> <span style={{ color: " #7257ff" }}>powerful Athletes</span>
        </h2>
        <p className="mt-3">Choose a plan that’s right for you</p>
        <div
          className="d-flex justify-content-between  "
          style={{ width: "60%", margin: "40px auto", gap: "20px" }}
        ></div>
      </section>
    </DoctorMenu>
  );
};

export default DoctorOnlineAca;
