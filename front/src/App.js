import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";

import Dashboard from "./pages/Admin/Dashboard";
import Partner from "./pages/Admin/Partner";
import Order from "./pages/Admin/Order";
import Assignment from "./pages/Admin/Assignment";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import PartnerProfile from "./pages/Partners/PartnerProfile";
import PartnerOrder from "./pages/Partners/PartnerOrders";
import PartnerDashboard from "./pages/Partners/PartnerDashboard";
import PartnerAssignments from "./pages/Partners/PartnerAssignments"
import AddOrder from "./Auth/AddOrder";
import AddAssignment from "./Auth/AddAssignment";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/partner" element={<Partner />} />
          <Route path="/admin/order" element={<Order />} />
          <Route path="/admin/assignment" element={<Assignment />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin/partner-register" element={<Registration />} />
          <Route path="/admin/order/add" element={<AddOrder />} />
          <Route path="/admin/assignment/add" element={<AddAssignment />} />
          <Route path="/partner" element={<PartnerDashboard />} />
          <Route path="/partner/profile" element={<PartnerProfile />} />
          <Route path="/partner/order" element={<PartnerOrder />} />
          <Route path="/partner/assignment" element={<PartnerAssignments />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
