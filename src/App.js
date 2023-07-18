import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from "./AdminPages/AdminDashboard";
import AdminCreateProperty from "./AdminPages/AdminCreateProperty";
import AdminCreateUser from "./AdminPages/AdminCreateUser";
import AdminPropertyView from "./AdminPages/AdminPropertyView";
import AdminUserView from "./AdminPages/AdminUserView";
import AdminAgentView from "./AdminPages/AdminAgentView";
import AdminCreateAgent from "./AdminPages/AdminCreateAgent";
import BookingStatus from './AdminPages/BookingStatus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path="/admin-create-user" element={<AdminCreateUser />} />
        <Route path="/admin-create-property" element={<AdminCreateProperty />} />
        <Route path="/admin-property-view" element={<AdminPropertyView />} />
        <Route path="/admin-user-view" element={<AdminUserView />} />
        <Route path="/admin-create-agent" element={<AdminCreateAgent />} />
        <Route path="/admin-agent-view" element={<AdminAgentView />} />
        <Route path="/admin-status" element={<BookingStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
