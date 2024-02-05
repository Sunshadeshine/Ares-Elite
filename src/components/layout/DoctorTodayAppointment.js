import moment from "moment";
import React, { useEffect, useState } from "react";
import { Image, NavLink, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetTodayAppointmentDetails } from "../../features/apiCall";
import BootstrapModal from "./Components/BootstrapModal";

const DoctorTodayAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  const [visibleAppointments, setVisibleAppointments] = useState(10);

  const appointments = useSelector((state) => state.fetch_app.appointments);
  const dispatch = useDispatch();
  const todayDate = moment().format("YYYY-MM-DD");
  useEffect(() => {
    // Fetch data from your API here
    const fetchData = async () => {
      try {
        await GetTodayAppointmentDetails(dispatch, todayDate);
        // setAppointments(data); // Assuming your API response is an array of appointments
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleViewMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section
        className="today-appoint-container bg-white "
        style={{ gap: "24px", width: "40vw", margin: "70px 80px" }}
      >
        <div className="d-flex justify-content-between w-100 mb-4">
          <h5>Today's Appointment</h5>
          {appointments && appointments.length > visibleAppointments && (
            <NavLink className="view-all">View All</NavLink>
          )}
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
            {appointments &&
              appointments.slice(0, visibleAppointments).map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Image
                        alt="profile picture"
                        src={appointment.profilePicture} // Replace with the path to your image
                        roundedCircle
                        width={42}
                        height={42}
                        className="mr-2"
                      />
                      <div>
                        <div style={{ fontSize: "15px", color: "black" }}>
                          {appointment.name}
                        </div>
                        <div style={{ fontSize: "12px", color: "grey" }}>
                          {appointment.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{appointment.service}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
      <BootstrapModal
        show={showModal}
        onHide={handleCloseModal}
        modalTitle={`All Appointments for ${todayDate}`}
        modalContent={<ModalContent appointments={appointments} />}
      />
    </>
  );
};

export default DoctorTodayAppointment;
const ModalContent = ({ appointments }) => {
  return (
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
        {appointments &&
          appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>
                <div className="d-flex align-items-center">
                  <Image
                    alt="profile picture"
                    src={appointment.profilePicture} // Replace with the path to your image
                    roundedCircle
                    width={42}
                    height={42}
                    className="mr-2"
                  />
                  <div>
                    <div style={{ fontSize: "15px", color: "black" }}>
                      {appointment.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "grey" }}>
                      {appointment.email}
                    </div>
                  </div>
                </div>
              </td>
              <td>{appointment.service}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
