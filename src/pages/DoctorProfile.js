import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetProfileDetails } from "../features/apiCall";
import { logOut } from "../features/authSlice";
import "../styles/profile.css";

const DoctorProfile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => setIsChecked(!isChecked);
  const [user, setUser] = useState([]);
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const { isFetching } = useSelector((state) => state.auth);
  const fetchData = async () => {
    try {
      const data = await GetProfileDetails(dispatch);
      setUser(data?.user);
      console.log(user?.fullname);
    } catch (error) {
      // Handle any errors that might occur during the data fetching
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  return (
    <DoctorMenu>
      <div className="m-4 profile">
        <section
          className="p-4  "
          style={{ backgroundColor: "white", margin: "auto", height: "95vh" }}
        >
          <h4> Profile</h4>
          <div
            className="p-4 prof-cont"
            style={{ alignItems: "center", backgroundColor: "#F4F4F4" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="/images/image3.png"
                height={150}
                style={{ borderRadius: "50%", marginRight: "40px" }}
              />
              <div>
                <ReactPlaceholder
                  type="text"
                  color="#F0F0F0"
                  showLoadingAnimation
                  rows={1}
                  style={{ width: "30%" }}
                  ready={!isFetching}
                >
                  <h5>{user?.fullname}</h5>
                  <div style={{ color: "rgb(134 131 131)" }}>
                    <p>{user?.email}</p>
                    <p>234326723523</p>
                  </div>
                </ReactPlaceholder>
              </div>
            </div>
            <div>
              <img src />
            </div>
          </div>
          <Link to="/doctor/dashboard/edit-profile">
            <div className=" prof-cont">
              <div>
                <p>Edit Profile</p>
                <span>you can edit you all information from here</span>
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <div className="prof-cont">
            <div>
              <p>Change Password</p>
              <span>Change password to login to your account.</span>
            </div>
            <div>
              <img src="/images/icons/arrow-left.svg" />
            </div>
          </div>
          <Link to="/privacy-policy">
            <div className="prof-cont">
              <div>
                <p>Privacy Policy</p>
                <span>View the privacy policy </span>
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <Link to="/terms-of-use">
            <div className="prof-cont">
              <div>
                <p>Terms of use</p>
                <span>View the terms of use </span>{" "}
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <div className="pl-4 ">
            <button className="text-danger p-0" onClick={handleLogout}>
              Log out
            </button>
            <br />
            <span>Log out from this device.</span>
          </div>
        </section>
      </div>
    </DoctorMenu>
  );
};

export default DoctorProfile;
