import { React, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DoctorMenu from "../../../components/layout/DoctorMenu";

const Step1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    suffix: "",
    customerDate: "",
    age: "",
    gender: "Male",
    feet: "",
    inch: "",
    dominantHand: "Right",
    guardianFirstName: "",
    guardianLastName: "",
    guardianSuffix: "",
    organization: "Org 1",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting Form:", formData);
  };

  return (
    <DoctorMenu>
      <h3> Client Information</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label className="text-black">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label className="text-black">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="suffix">
              <Form.Label className="text-black">Suffix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter suffix"
                name="suffix"
                value={formData.suffix}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="customerDate">
              <Form.Label className="text-black">Customer Date</Form.Label>
              <Form.Control
                type="date"
                name="customerDate"
                value={formData.customerDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="age">
              <Form.Label className="text-black">Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Label className="text-black">Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Form.Group controlId="height">
              <Form.Label className="text-black ">Height</Form.Label>
              <Form.Control
                as="select"
                name="feet"
                value={formData.feet}
                onChange={handleChange}
                className="w-100"
              >
                <option>Feet</option>
                {/* Add possible numbers for feet */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="height">
              <Form.Label className="text-black">Height</Form.Label>
              <Form.Control
                as="select"
                name="inch"
                value={formData.inch}
                onChange={handleChange}
                className="w-100"
              >
                <option>Inch</option>
                {/* Add possible numbers for inch */}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="dominantHand">
              <Form.Label className="text-black">Dominant Hand</Form.Label>
              <Form.Control
                as="select"
                name="dominantHand"
                value={formData.dominantHand}
                onChange={handleChange}
              >
                <option>Right</option>
                <option>Left</option>
                <option>Ambidextrous</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* <Row>
          <Col md={6}>
            <Form.Group controlId="guardianFirstName">
              <Form.Label className="text-black">
                Guardian's First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter guardian's first name"
                name="guardianFirstName"
                value={formData.guardianFirstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="guardianLastName">
              <Form.Label className="text-black">
                Guardian's Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter guardian's last name"
                name="guardianLastName"
                value={formData.guardianLastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row> */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="guardianSuffix">
              <Form.Label className="text-black">Guardian Suffix</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter guardian suffix"
                name="guardianSuffix"
                value={formData.guardianSuffix}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="organization">
              <Form.Label className="text-black">Organization</Form.Label>
              <Form.Control
                as="select"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              >
                <option>Org 1</option>
                <option>Org 2</option>
                <option>Org 3</option>
              </Form.Control>
              {/* <div className="dropdown-icon position-absolute">
                <i className="fa fa-chevron-down" aria-hidden="true" />
              </div> */}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label className="text-black">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label className="text-black">Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="address">
              <Form.Label className="text-black">Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-100"
              />
            </Form.Group>
          </Col>
        </Row>
        <NavLink
          type="submit"
          className="purple-button"
          style={{ width: "200px" }}
          to="/step2"
        >
          Next
        </NavLink>
      </Form>
    </DoctorMenu>
  );
};

export default Step1;

// const Timeline = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const getProgress = () => {
//     return (currentStep / 4) * 100;
//   };

//   return (
//     <div className="timeline-container">
//       <ProgressBar now={getProgress()} label={`${currentStep}/4`} className="mb-3" />

//       <div className="timeline-steps">
//         <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
//           <span className="step-number">1</span>
//           <span className="step-name">Step One</span>
//         </div>

//         <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
//           <span className="step-number">2</span>
//           <span className="step-name">Step Two</span>
//         </div>

//         <div className={`step ${currentStep >= 3 ? 'completed' : ''}`}>
//           <span className="step-number">3</span>
//           <span className="step-name">Step Three</span>
//         </div>

//         <div className={`step ${currentStep >= 4 ? 'completed' : ''}`}>
//           <span className="step-number">4</span>
//           <span className="step-name">Step Four</span>
//         </div>
//       </div>

//       <Button onClick={handleNext} disabled={currentStep === 4}>
//         Next
//       </Button>
//     </div>
//   );
// };

// export default Timeline;
