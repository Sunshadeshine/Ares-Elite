import { Route, Routes } from "react-router-dom";

import SignIn from "./components/auth/SignIn";

import UpdatePassword from "./components/auth/password/UpdatePassword";
import ForgotPassword from "./components/auth/password/forgotPassword";
import DoctorConsultationCall from "./pages/DoctorConsultationCall";
import DoctorSelectUserType from "./pages/DoctorHome";
import DoctorInOffice from "./pages/DoctorInOffice";
import DoctorOnlineAca from "./pages/DoctorOnlineAca";
import Step1 from "./pages/Forms.js/Client Information/Step1";
import Step2 from "./pages/Forms.js/Client Information/Step2";
import Step3 from "./pages/Forms.js/Client Information/Step3";
import Step4 from "./pages/Forms.js/Client Information/Step4";
import "./styles/doctor.css";
import "./styles/login.css";
import ErrorBoundary from "./utils/ErrorBoundary.js";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/doctor-home" element={<DoctorSelectUserType />} />
          <Route path="/doctor-inoffice" element={<DoctorInOffice />} />
          <Route path="/doctor-online" element={<DoctorOnlineAca />} />
          <Route
            path="/consultation-call"
            element={<DoctorConsultationCall />}
          />
          {/* <Route path="/home" element={<DoctorHome/>} />{" "} */}
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
