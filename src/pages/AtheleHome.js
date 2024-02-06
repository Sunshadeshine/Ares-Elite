import React from "react";
import { Col, Container, Row, Table,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import "../styles/athele.css";
import "../styles/athelehome.css";
import "../styles/doctor.css";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const AtheleHome = () => {
  const defaultValues = [
    new Date(2024, 0, 10),
    new Date(2024, 0, 15),
    new Date(2024, 0, 20),
  ];

  const options = {
    aspectRatio: 1, // Set the aspect ratio to 1:1
    responsive: true,
    width: 100, // Set the width of the chart
    height: 100 // Set the height of the chart
    
  };

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 500, 100],
        backgroundColor: ["#5E3FBE","#F4F0FD","#E5DAFB","#CBB6F8"],
        borderColor: 'rgba(0, 0, 0, 0)'
      }
    ]
  };


  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalOpenafter, setIsModalOpenafter] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModal2=()=>{
     setIsModalOpenafter(!isModalOpenafter)
     
  }
  const modalContentafter=<div style={{width:"100%", display:"flex",flexDirection:"column",gap:"15px",height:"446px" ,overflowY:"scroll"}}> 
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  <div style={{display:"flex",gap:"3px",justifyContent:"space-between"}}>
   <div> <Image src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg" style={{height:"50px",borderRadius:"100%"}} /></div>
   <div><p style={{fontSize:"10px"}}>Congratulations Max on completing 24 Tele Training Sessions with Dr. Joe-your commitment to growth shines bright! 🌟</p></div>
   <div style={{fontSize:"9px",textAlign:"end",display:"flex",alignItems:"flex-end"}}> <p>9:10</p></div>
  </div>
  
  </div>

  const modalContent=<div style={{width:"100%"}}> 
  <div>
    <div style={{display:"flex",justifyContent:"space-between",height:"10px"}}> <p>Tele Trainings</p> <p>16</p></div>
    <hr/>
  </div>
  <div>
    <div style={{display:"flex",justifyContent:"space-between",height:"10px"}}> <p>Medical office Visit</p> <p>16</p></div>
    <hr/>
  </div>
  <div>
    <div style={{display:"flex",justifyContent:"space-between",height:"10px"}}> <p>Post Concussion</p> <p>16</p></div>
    <hr/>
  </div>
  <div>
    <div style={{display:"flex",justifyContent:"space-between",height:"10px"}}> <p>Sports Vision Evaluation</p> <p>16</p></div>
    <hr/>
  </div>
  <div>
    <div style={{display:"flex",justifyContent:"space-between",height:"10px"}}> <p>In Office Trainings</p> <p>0</p></div>
    <hr/>
  </div>
  <div style={{height:"200px",widht:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
  <Pie data={data}   options={options} />
  </div>

 
  </div>

  const modalFooter=<>
  <button style={{padding:"16px 20px 16px 20px",width:"250px",background:"white",color:"black",borderRadius:"37px",fontWeight:"600px"}} onClick={handleModal2}>
    View Acheivements
  </button>
  </>
  
   
  

  return (
    <AtheleteMenu>
      <section style={{ overflowY: "hidden" }} className="athel-home">
        <p className="h4 " style={{ marginLeft: "20px", margin: "10px 20px" }}>
          Hello,
          <p className="font-weight-bold d-inline">
            Colter! <img src="/images/icon/hi.svg" />
          </p>
        </p>
        <Container style={{ height: "85%", width: "99%" }}>
          <Row style={{ height: "100%" }} className="justify-content-around ">
            <Col sm={8} xs={12} className="d-grid  all-cont-width">
              <Row
                className="justify-content-between gap-2 flex-row"
                style={{ maxWidth: "80vw" }}
              >
                <Col
                  xs={6}
                  sm={6}
                  className="rounded-4 p-4 d-flex justify-content-around flex-column"
                  style={{
                    background:
                      "linear-gradient(95deg, #CDC3FF -2.52%, rgba(114, 87, 255, 0.60) 100%)",
                  }}
                >
                  <h3 style={{ Color: "#2C2C2C" }}>
                    Powerful features for powerful Athletes.{" "}
                  </h3>
                  <p className="text-muted">
                    Choose a plan that’s right for them. All plans will be
                    customized according to you
                  </p>
                  <div>
                    <button className="text-light select-plan">
                      Select Plan{" "}
                    </button>
                    <img src="/images/sports.png" id="sports-person" />
                  </div>
                </Col>
                <Col
                  xs={6}
                  sm={6}
                  style={{
                    background: "#1B2C4F",
                  }}
                  className=" rounded-4 p-4 "
                >
                  <div>
                    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                    <span style={{ color: "#CCC" }}>Tele Sessions</span>
                    <span style={{ color: "#FFFF" }}> View All</span>

                    </div>
                    
                    <br />
                    <div className="d-flex justify-content-between">
                    {
                      false ? <><h3 className="mt-3 text-white">No Active Plans</h3></>:<div> <h3 className="mt-3 text-white">Total - 6</h3>
                      <h3 className="text-white">Remaining- 4 </h3></div>
                    }

                    <div>
                    <img src="/images/icon/percent.svg" height={120} />
                  </div>

                    </div>
                    
                  
                  </div>
                  
                </Col>
              </Row>
              <Row>
                <h5>Select Service</h5>
                <Container className="services-cont ">
                  <Row
                    className="justify-content-between "
                    style={{ maxWidth: "80vw" }}
                  >
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#57315A" }}
                      className="text-light mb-4 d-flex justify-content-between  align-items-center"
                      onClick={openModal}
                    >
                      <img
                        src="/images/icon/sportsvison.svg"
                        className="service-cont-icon"
                        style={{height:"60%"}}
                      />
                      <div style={{ width: "60%" }} >
                        <h7>Sports Vision Evaluation</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock_light.svg"
                            className="service-cont-clock"
                         
                          />{" "}
                          $13.88 per 30 Minutes
                        </p>
                      </div>
                      <img
                        src="/images/icon/service.svg"
                        className="service-cont-arrow
                    "
                      />
                    </Col>
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#FF8989" }}
                      className="text-light mb-4 d-flex justify-content-between align-items-center"
                    >
                      <img
                        src="/images/icon/postcon.svg"
                        className="service-cont-icon"
                        style={{height:"60%"}}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Post-Concussion Evaluation</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock_light.svg"
                            className="service-cont-clock
                    "
                          />{" "}
                          $13.88 per 30 Minutes
                        </p>
                      </div>
                      <img
                        src="/images/icon/service.svg"
                        className="service-cont-arrow
                    "
                      />
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-between"
                    style={{ maxWidth: "80vw" }}
                  >
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#C1E2F4" }}
                      className=" mb-4 d-flex justify-content-between  align-items-center"
                    >
                      <img
                        src="/images/icon/medical.svg"
                        className="service-cont-icon"
                        style={{height:"60%"}}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Medical/Office visit</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock.svg"
                            className="service-cont-clock
                    "
                          />{" "}
                          $13.88 per 30 Minutes
                        </p>
                      </div>
                      <img
                        src="/images/icon/service.svg"
                        className="service-cont-arrow
                    "
                      />
                    </Col>
                    <Col
                      sm={6}
                      style={{ backgroundColor: "#D9CFFB" }}
                      className=" mb-4 d-flex justify-content-between  align-items-center"
                    >
                      <img
                        src="/images/icon/consul.svg"
                        className="service-cont-icon"
                        style={{height:"60%"}}
                      />
                      <div style={{ width: "60%" }}>
                        <h7>Consultation Call</h7>
                        <p>
                          {" "}
                          <img
                            src="/images/icon/clock_light.svg"
                            className="service-cont-clock
                    "
                          />{" "}
                          $13.88 per 30 Minutes
                        </p>
                      </div>
                      <img
                        src="/images/icon/service.svg"
                        className="service-cont-arrow
                    "
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row >
                <h5>Recent Prescription</h5>
                <Table bordered striped style={{ background: "transparent" }} >
                  <tbody>
                    <tr>
                      <td className="d-flex" style={{ paddingLeft: "20px" }}>
                        <img
                          src="/images/image3.png"
                          className="recent-booking-person-image "
                          style={{ marginRight: "10px" }}
                        />
                        <div>
                          <small className="name">Dr.Joe</small>
                          <br />
                        </div>
                      </td>
                      <td className="date">10 Jan 2024</td>
                      <td className="time">10:25AM</td>
                      <td className="service_type">Post Concussion</td>
                      <td className="">
                        <Link>View Prescription</Link>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="d-flex" style={{ paddingLeft: "20px" }}>
                        <img
                          src="/images/image3.png"
                          className="recent-booking-person-image "
                          style={{ marginRight: "10px" }}
                        />
                        <div>
                          <small className="name">Dr.Joe</small>
                          <br />
                        </div>
                      </td>
                      <td className="date">10 Jan 2024</td>
                      <td className="time">10:25AM</td>
                      <td className="service_type">Post Concussion</td>
                      <td className="">
                        <Link>View Prescription</Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
            <Col
              class="col-md-auto "
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                paddingTop: "20px",
                marginLeft: "25px",
                marginRight: "25px",
                padding: "20px 10px",
              }}
            >
              {/* <Calendar
                defaultValue={defaultValues}
                style={{ height: "200px" }}
              /> */}
              <Row className="m-1">
                <div className="d-flex justify-content-between ">
                  <h5>Upcoming</h5>
                  <Link
                    className="text-primary text-decoration-underline"
                    style={{ fontSize: "13px" }}
                  >
                    View All
                  </Link>
                </div>
                <div className="appointments-aligned mt-3">
                  <div className="appointments-aligned-div">
                    <div
                      className="b-gradient-1 d-flex justify-content-center align-items-center text-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      M
                    </div>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="appointments-aligned-div">
                    <div
                      className="b-gradient-1 d-flex justify-content-center align-items-center text-white"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    >
                      M
                    </div>
                    <div className="d-flex flex-column ">
                      <h7>Dr. Alex</h7>
                      <p className="m-0">
                        Post Concussion | 9 Apr’23 | 04:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="m-1">
                <div className="d-flex justify-content-between">
                  <h5>Notifications</h5>
                  <Link
                    className="text-secondary text-decoration-underline"
                    style={{ fontSize: "13px" }}
                  >
                    Show More
                  </Link>
                </div>
                <div
                  style={{ backgroundColor: "rgba(123, 107, 169, 0.10)" }}
                  className="rounded-4  p-2"
                >
                  <div className="d-flex flex-start flex-row mt-3">
                    <img
                      src="/images/image3.png"
                      className="recent-booking-person-image rounded-3"
                      style={{ marginRight: "10px" }}
                    />
                    <div className="flex-row">
                      <h7>Dr.Joe</h7>

                      <p className="m-0"> Ophthalmologist</p>
                    </div>
                  </div>
                  <div className="d-flex  flex-column align-items-end mt-3">
                    <p style={{ fontSize: "13px", marginLeft: "50px" }}>
                      Doctor has choose the Novice program P1 for you, Please
                      pay the amount to proceed.
                    </p>
                    <button className="b2">Pay Now</button>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <BootstrapModal  showModal={isModalOpen} handleClose={closeModal}  modalContent={modalContent} modalFooter={modalFooter} css="black"/>
        <BootstrapModal  showModal={isModalOpenafter} handleClose={handleModal2} modalContent={modalContentafter} css="black"/>

      </section>
    </AtheleteMenu>
  );
};

export default AtheleHome;
