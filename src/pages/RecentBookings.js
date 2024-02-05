import React, { useEffect, useState } from "react";
import { Dropdown, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetRecentBookings } from "../features/apiCall";
// import { Group } from "./Group";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RecentBookings = () => {
  const bookings = useSelector((state) => state.fetch_app.bookings);
  const totalPages = useSelector((state) => state.fetch_app.totalPages);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const [showDateInput, setShowDateInput] = useState(null);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const pageSize = isDesktop ? 8 : 9;
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      // Create an object to hold the parameters
      const params = {
        currentPage,
        pageSize,
      };

      // Add parameters only if they are not empty
      if (selectedStatus) {
        params.selectedStatus = selectedStatus;
      }

      if (selectedServiceTypes.length > 0) {
        params.selectedServiceTypes = selectedServiceTypes.toString();
      }

      if (selectedDate) {
        // Format the date to 'yyyy-MM-dd'
        const formattedDate = new Date(selectedDate).toLocaleDateString(
          "en-CA"
        );

        params.selectedDate = formattedDate;
      }

      await GetRecentBookings(dispatch, params);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data whenever currentPage changes
  }, [currentPage, selectedDate, selectedStatus, selectedServiceTypes]);

  const startIndex = (currentPage - 1) * pageSize;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const Service_ENUM_values = {
    SportsVision: "Sports Vision Evaluation",
    TrainingSessions: "Training Sessions",
    ConcussionEval: "Concussion Evaluation",
    MedicalOfficeVisit: "Medical Office Visit",
    Consultation: "Consultation Call",
  };
  const Status_ENUM_values = {
    paid: "paid",
    pending: "pending",
    failed: "failed",
    All: "All",
  };
  const handleServiceTypeFilter = (selectedServiceType) => {
    setSelectedServiceTypes((prevSelectedServiceTypes) => {
      const updatedServiceTypes = prevSelectedServiceTypes.includes(
        selectedServiceType
      )
        ? prevSelectedServiceTypes.filter(
            (type) => type !== selectedServiceType
          )
        : [...prevSelectedServiceTypes, selectedServiceType];

      console.log(updatedServiceTypes);

      // Update state before calling fetchData
      setSelectedServiceTypes(updatedServiceTypes);

      // fetchData(); // Call fetchData after state has been updated

      return updatedServiceTypes;
    });
  };
  const handleStatusFilter = (status) => {
    if (status == "All") {
      setSelectedStatus("");
    } else {
      setSelectedStatus(status);
    }
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };
  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-5 booking-presc">
        <div className="frame ">
          <div className="d-flex justify-content-between align-items-center recent-booking-head">
            <div style={{ paddingLeft: "15px" }}>
              <h2 className="">Recent Bookings</h2>
            </div>
            <div
              className="input-group mb-3 search-bar"
              style={{ width: "400px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="searchIcon"
              />
              <div className="input-group-append ">
                <span className="input-group-text" id="searchIcon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>

            <div
              className=" d-flex flex-row  justify-content-center mt-3"
              style={{ width: "150px", gap: "10px", marginRight: "15px" }}
            >
              <i class="fa-solid fa-calendar m-auto" />
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {currentPage} of {totalPages}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {[...Array(totalPages).keys()].map((page) => (
                    <Dropdown.Item
                      key={page + 1}
                      onClick={() => handlePageChange(page + 1)}
                    >
                      {page + 1}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* </div> */}
          </div>
          <div className="table-div-booking">
            <Table
              className="table"
              striped
              hover
              variant="light"
              // style={{ height: "70vh" }}
            >
              <thead className="table-head">
                <tr>
                  <th style={{ paddingLeft: "20px" }}>
                    <div>Name</div>
                  </th>
                  <th>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Select Service Types{" "}
                        <i className="fa-solid fa-filter" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Object.keys(Service_ENUM_values).map((key) => (
                          <Dropdown.Item key={key}>
                            <input
                              type="checkbox"
                              id={key}
                              checked={selectedServiceTypes.includes(key)}
                              onChange={() => handleServiceTypeFilter(key)}
                            />
                            <label htmlFor={key}>
                              {Service_ENUM_values[key]}
                            </label>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </th>
                  <th>
                    <div className="date-container">
                      <div
                        className="date-display "
                        onClick={() => setShowDateInput(!showDateInput)}
                      >
                        {selectedDate === null
                          ? "Date"
                          : new Date(selectedDate).toLocaleDateString("en-CA")}
                        <i className="fa-solid fa-sort" />
                      </div>
                      {showDateInput && (
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => {
                            handleDateFilter(date);
                            setShowDateInput(false);
                          }}
                        />
                      )}
                    </div>
                  </th>
                  <th>Time</th>
                  <th>Mobile Number</th>
                  <th>
                    <Dropdown
                      onSelect={(eventKey) => handleStatusFilter(eventKey)}
                    >
                      <Dropdown.Toggle variant="light" id="status-dropdown">
                        {selectedStatus
                          ? Status_ENUM_values[selectedStatus]
                          : "Select Status"}
                        <i className="fa-solid fa-filter" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Object.keys(Status_ENUM_values).map((status) => (
                          <Dropdown.Item key={status} eventKey={status}>
                            {Status_ENUM_values[status]}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </th>
                  <th></th>
                </tr>
              </thead>

              {!isFetching ? (
                <>
                  {" "}
                  <tbody className="recent-bookings-cont">
                    {bookings.length > 0 ? (
                      <>
                        {" "}
                        {bookings.map((booking, index) => (
                          <tr key={index}>
                            <td
                              className=" name-email-image-cont"
                              style={{ paddingLeft: "20px" }}
                            >
                              <img
                                src="/images/image3.png"
                                alt={booking?.name}
                                className="recent-booking-person-image "
                                style={{ marginRight: "10px" }}
                              />
                              <div>
                                <small className="name">
                                  {booking?.client?.first_name}{" "}
                                  {booking?.client?.last_name}
                                </small>
                                <br />
                                <small className="email">
                                  {booking?.client?.email}
                                </small>
                              </div>
                            </td>
                            <td className="service_type">
                              {Service_ENUM_values[booking?.service_type]}
                            </td>
                            <td className="date">{booking?.app_date}</td>
                            <td className="time">{booking?.app_time}</td>
                            <td className="phoneno">
                              {booking?.client?.phone_number}
                            </td>
                            <td className="status">
                              <div className={`${booking?.status} `}>
                                {booking.status}
                              </div>
                            </td>
                            <td>...</td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td>
                            {" "}
                            <div className="text-center ">
                              No Appointments
                            </div>{" "}
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </>
              ) : (
                <>
                  {/* <tbody>
                    <tr>
                      {" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>
                    </tr>{" "}
                    <tr><td></td><td></td></tr>
                    <tr>
                      {" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>
                    </tr>{" "}
                    <tr>
                      {" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>{" "}
                      <td>
                        {" "}
                        <Placeholder size="lg" />
                      </td>
                    </tr>{" "}
                    <tr></tr>
                  </tbody> */}
                  <Spinner className="m-auto" />
                </>
              )}
            </Table>
          </div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentBookings;
