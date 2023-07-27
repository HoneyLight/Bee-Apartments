

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Home from "./Component/Home"
import SideBar from "./components/Agent/Sidebar"
import Login2 from "./components/Agent/Login2";
import Createpro from "./components/Agent/Createpro";
import Viewpro from "./components/Agent/Viewpro";
import Editpro from "./components/Agent/Editpro";
import Appointment from "./components/Agent/Appointment";
import Property from "./pages/Property";
import AppointmentStatus from "./pages/AppointmentStatus";
// new
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard"
import AdminCreateProperty from "./components/Admin/AdminCreateProperty";
import AdminCreateUser from "./components/Admin/AdminCreateUser";
import AdminPropertyUnverified from "./components/Admin/AdminPropertyUnverified";
import AdminPropertyVerified from "./components/Admin/AdminPropertyVerified";
import AdminUserView from "./components/Admin/AdminUserView";
import AdminAgentView from "./components/Admin/AdminAgentView";
import AdminCreateAgent from "./components/Admin/AdminCreateAgent";
import AdminCreateAdmin from "./components/Admin/AdminCreateAdmin";




function App() {
  return (
    // <FoodProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:id" element={<Property />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/Createpro" element={<Createpro />} />
        <Route path="/Viewpro" element={<Viewpro />} />
        <Route path="/Editpro" element={<Editpro />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/AppointmentStatus" element={<AppointmentStatus />} />
        {/* new */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path="/admin-create-user" element={<AdminCreateUser />} />
        <Route path="/admin-create-property" element={<AdminCreateProperty />} />
        <Route path="/admin-property-unverified" element={<AdminPropertyUnverified />} />
        <Route path="/admin-property-verified" element={<AdminPropertyVerified />} />
        <Route path="/admin-user-view" element={<AdminUserView />} />
        <Route path="/admin-create-agent" element={<AdminCreateAgent />} />
        <Route path="/admin-agent-view" element={<AdminAgentView />} />
        <Route path="/admincreateadmin" element={<AdminCreateAdmin />} />






      </Routes>
    </BrowserRouter>
  )

}
export default App;