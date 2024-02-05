import React from "react";
import { Row } from "react-bootstrap";
const ProfileDetails = () => {
  return (
    <Row>
      <div
        className="athel-profile-head"
        style={{ position: "relative", bottom: "60px" }}
      >
        <div className="d-flex   gap-3" style={{width:"100%"}}>
          <img
            src="/images/sample.svg"
            
            className="athel-profile"
          />
          <div className="athel-profile-name desktop ">
            <h2 style={{ color: "#083A50" }}>Mobina Mirbagheri</h2>
            {/* <p>Your account is ready</p> */}
          </div>
        </div>
        <div className="athel-profile-name" sm={6}>
          <div className=" mobile">
            <h2 style={{ color: "#083A50" }}>Mobina Mirbagheri</h2>
            {/* <p>Your account is ready</p> */}
          </div>
          <img src="/images/icon/share.svg" className="sharebtn"/>
        </div>
      </div>
    </Row>
  );
};

export default ProfileDetails;
