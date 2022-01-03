import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./assets/css/styles.css";

// pages and components
import Home from "./pages/home/Home";
import PatientDashboard from "./pages/patient-dashboard/PatientDashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar/Navbar";
import StaffDashboard from "./pages/staff-dashboard/StaffDashboard";

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

          {/* Patient Dashboard Routes */}

          <Route path="/patient/dashboard" element={<PatientDashboard option={""} />} />
          <Route path="/patient/dashboard/book-appointment" element={<PatientDashboard option={"/book-appointment"} />} />
          <Route path="/patient/dashboard/view-appointment" element={<PatientDashboard option={"/view-appointment"} />} />
          <Route path="/patient/dashboard/medical-record" element={<PatientDashboard option={"/medical-record"} />} />
          {/* Staff Dashboard Routes */}

          <Route path="/staff/dashboard" element={user ? <StaffDashboard option={""} /> : <Navigate to="/login" />} />
          <Route path="/staff/dashboard/doctor" element={user ? <StaffDashboard option={"/doctor"} /> : <Navigate to="/login" />} />
          <Route path="/staff/dashboard/cashier" element={user ? <StaffDashboard option={"/cashier"} /> : <Navigate to="/login" />} />
          <Route path="/staff/dashboard/receptionist" element={user ? <StaffDashboard option={"/receptionist"} /> : <Navigate to="/login" />} />
          <Route path="/staff/dashboard/labassistant" element={user ? <StaffDashboard option={"/labassistant"} /> : <Navigate to="/login" />} />
          <Route path="/staff/dashboard/nurse" element={user ? <StaffDashboard option={"/nurse"} /> : <Navigate to="/login" />} />

          {/* Default Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
