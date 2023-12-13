import React, { useState } from "react";
import { Col, NavLink, Row, ToastContainer } from "react-bootstrap";

const DoctorMenu = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const navigationMenu = [
    { itemName: "Home", iconClass: "fa-home" },
    { itemName: "Recent Bookings", iconClass: "fa-calendar" },
    { itemName: "Recent Evaluation", iconClass: "fa-list-check" },
    { itemName: "Recent Prescription", iconClass: "fa-file-lines" },
    { itemName: "Profile", iconClass: "fa-user" },
  ];

  return (
    <>
      <div>
        <Row>
          <Col sm={12} md={2}>
            <main className="w-100 h-100 doctor-menu text-center text-secondary">
              <img
                src="images/DoctorMenuLogo.png
              "
                width={130}
                className=""
              />
              <ul className="list-unstyled text-start ">
                {navigationMenu.map((item, index) => (
                  <NavigationItem
                    key={index}
                    itemName={item.itemName}
                    iconClass={item.iconClass}
                    handleItemClick={() => handleItemClick(item.itemName)}
                    isSelected={selectedItem === item.itemName}
                  />
                ))}
              </ul>
              <NavLink
                className="text-left position-absolute  "
                style={{ bottom: "30px" }}
              >
                <div>
                  <i className="fa fa-sign-out" aria-hidden="true" />
                  Logout
                </div>
              </NavLink>
            </main>
          </Col>
          <Col
            sm={12}
            md={10}
            style={{ backgroundColor: "#F2F8FD", padding: "0px" }}
          >
            <div className="vh-100 p-0">
              <main>{children}</main>
              <ToastContainer position="top-center" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DoctorMenu;
const NavigationItem = ({
  itemName,
  iconClass,
  handleItemClick,
  isSelected,
}) => {
  return (
    <li className={isSelected ? "selected" : ""}>
      <NavLink to="#" onClick={handleItemClick}>
        <i className={`fa ${iconClass}`} aria-hidden="true" />
        {itemName}
      </NavLink>
    </li>
  );
};
