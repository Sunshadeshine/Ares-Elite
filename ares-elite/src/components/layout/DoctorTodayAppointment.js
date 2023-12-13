import React from "react";
import { Image, NavLink, Table } from "react-bootstrap";

const DoctorTodayAppointment = () => {
  return (
    <>
      <section
        className="today-appoint-container bg-white mr-5"
        style={{ gap: "24px", width: "40%" }}
      >
        <div className="d-flex justify-content-between w-100 mb-4">
          <h5>Today's Appointment</h5>
          <NavLink className="view-all">View All</NavLink>
        </div>
        <Table borderless responsive>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                Service
                <i className="fa-solid fa-filter" />
              </td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Image
                    alt="profile picture"
                    src="images/areseliteLogo.png" // Replace with the path to your image
                    roundedCircle
                    width={42}
                    height={42}
                    className="mr-2"
                  />
                  <div>
                    <div style={{ fontSize: "15px", color: "black" }}>Name</div>
                    <div style={{ fontSize: "12px", color: "grey" }}>Email</div>
                  </div>
                </div>
              </td>
              <td>Service</td>
              <td>Time</td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default DoctorTodayAppointment;
