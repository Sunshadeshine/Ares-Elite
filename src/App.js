import { Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import UpdatePassword from "./components/auth/password/UpdatePassword";
import ForgotPassword from "./components/auth/password/forgotPassword";
import AtheProfile from "./components/layout/AtheProfileLayout";
import AtheBookings from "./pages/AtheBookings";
import Account from "./pages/AtheProfileNavigations/Account";
import EditProfile from "./pages/AtheProfileNavigations/EditProfile";
import Password from "./pages/AtheProfileNavigations/Password";
import AtheTransactions from "./pages/AtheTransactions";
import Athedrill from "./pages/Athedrill";
import AtheleHome from "./pages/AtheleHome";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import "./styles/doctor.css";
import "./styles/login.css";
import "./styles/recent_bookings.css";
import ErrorBoundary from "./utils/ErrorBoundary.js";

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<AtheleHome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/a-home" element={<AtheleHome />} />
          <Route path="/a-transactions" element={<AtheTransactions />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/a-booking" element={<AtheBookings />} />
          <Route path="/a-drill" element={<Athedrill />} />
          <Route path="/a-profile" element={<EditProfile />} />
          <Route path="/a-account" element={<Account />} />
          <Route path="/a-security" element={<Password />} />
          <Route path="/a-profile" element={<AtheProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        {/* </Router> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
