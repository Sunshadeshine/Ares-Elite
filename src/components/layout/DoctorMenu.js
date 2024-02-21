import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BottomNavigation } from "reactjs-bottom-navigation";
import { logOut } from "../../features/authSlice";

const DoctorMenu = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Extracting the current URL path after the base URL
    const currentPath = location.pathname.replace("/doctor/dashboard", "");

    // Finding the matching navigation item based on the current URL path
    const matchedItem = navigationMenu.find((item) => item.to === currentPath);

    // Setting the selected item based on the match
    if (matchedItem) {
      setSelectedItem(matchedItem.itemName);
    }
  }, [location.pathname]);

  const isMobile = windowDimension <= 640;

  const BottomMenu = [
    {
      title: "Home",
      icon: "/images/icons/home.svg",
      to: "/doctor/dashboard",
    },
    {
      title: "Bookings",
      icon: "/images/icons/calender.svg",
      to: "/doctor/dashboard/recent-bookings",
    },
    {
      title: "Evaluations",
      icon: "/images/icons/list-check.svg",
      to: "/doctor/dashboard/recent-evaluation2",
    },
    {
      title: "Prescription",
      icon: "/images/icons/file-lines.svg",
      to: "/doctor/dashboard/recent-prescription",
    },
    {
      title: "Profile",
      icon: "/images/icons/user.svg",
      to: "/doctor/dashboard/profile",
    },
  ];
  const bottomNavItems = BottomMenu.map((item) => ({
    title: item.title,
    onClick: () => navigate(item.to),
    icon: <img src={item.icon} />,
  }));

  return (
    <>
      <div>
        <Row
          className="d-flex parent-of-all"
          style={{
            overflowX: "hidden",
            width: "100vw",
            backgroundColor: "#F2F8FD",
          }}
        >
          {isMobile ? (
            <BottomNavigation
              items={bottomNavItems}
              selected={1}
              activeBgColor="slateBlue"
              activeTextColor="white"
            />
          ) : (
            <div className="doctor-menu-cont">
              <main className="w-100 h-100 doctor-menu text-center text-secondary">
                <div style={{ height: "130px" }}>
                  <img
                    src="/images/DoctorMenuLogo.png"
                    alt="logo"
                    width={130}
                    className="menu-logo"
                  />
                </div>
                <div
                  className="list-group text-left mt-5 "
                  style={{ marginLeft: "9px" }}
                >
                  <Link
                    to="/doctor/dashboard"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="menu-icon-cont">
                      <img src="/images/icons/home.svg " className="icons" />
                    </div>
                    Home
                  </Link>
                  <NavLink
                    to="/doctor/dashboard/recent-bookings"
                    className="list-group-item list-group-item-action "
                  >
                    <div className="menu-icon-cont">
                      <img
                        src="/images/icons/calender.svg "
                        className="icons"
                      />
                    </div>
                    Recent Bookings
                  </NavLink>
                  <NavLink
                    to="/doctor/dashboard/recent-evaluation2"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="menu-icon-cont">
                      <img
                        src="/images/icons/list-check.svg"
                        className="icons"
                      />
                    </div>
                    Recent Evaluation
                  </NavLink>
                  <NavLink
                    to="/doctor/dashboard/recent-prescription"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="menu-icon-cont">
                      <img
                        src="/images/icons/file-lines.svg "
                        className="icons"
                      />
                    </div>
                    Recent Prescription
                  </NavLink>
                  <NavLink
                    to="/doctor/dashboard/profile"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="menu-icon-cont">
                      <img src="/images/icons/user.svg " className="icons" />
                    </div>
                    Profile
                  </NavLink>
                </div>
                <NavLink
                  className="text-left position-absolute  "
                  style={{ bottom: "30px", left: "10px" }}
                >
                  <div>
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    <Link
                      className="menu-list-items"
                      onClick={handleLogout}
                      to={"/"}
                    >
                      Logout{" "}
                    </Link>
                  </div>
                </NavLink>
              </main>
            </div>
          )}
          <div
            className="children-cont"
            style={{
              padding: "0px",
            }}
          >
            <div className="vh-100 p-0">
              <main>{children}</main>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default DoctorMenu;

// const NavigationItem = ({
//   itemName,
//   iconPath,
//   to,
//   handleItemClick,
//   isSelected,
// }) => {
//   return (
//     <li className={isSelected ? "selected" : ""}>
//       <Link to={to} onClick={handleItemClick} className="d-flex">
//         <div className="menu-icon-cont">
//           <img src={iconPath} alt={itemName} className="icons" />
//         </div>
//         <span className="menu-list-items">{itemName}</span>
//       </Link>
//     </li>
//   );
// };
{
  /* {navigationMenu.map((item, index) => (
                    <NavigationItem
                      key={index}
                      itemName={item.itemName}
                      iconPath={item.iconPath}
                      to={item.to}
                      handleItemClick={() => handleItemClick(item.itemName)}
                      isSelected={selectedItem === item.itemName}
                    />
                  ))} */
}
const navigationMenu = [
  {
    itemName: "Home",
    iconPath: "/images/icons/home.svg",
    to: "/doctor/dashboard",
  },
  {
    itemName: "Recent Bookings",
    iconPath: "/images/icons/calender.svg",
    to: "/doctor/dashboard/recent-bookings",
  },
  {
    itemName: "Recent Evaluation",
    iconPath: "/images/icons/list-check.svg",
    to: "/doctor/dashboard/recent-evaluation2",
  },
  {
    itemName: "Recent Prescription",
    iconPath: "/images/icons/file-lines.svg",
    to: "/doctor/dashboard/recent-prescription",
  },
  {
    itemName: "Profile",
    iconPath: "/images/icons/user.svg",
    to: "/doctor/dashboard/profile",
  },
];
