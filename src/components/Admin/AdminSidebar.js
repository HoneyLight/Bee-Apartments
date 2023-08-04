import { Link } from "react-router-dom";

function AdminSidebar() {
    return(
        <div className="sidebar-main">
            <ul className="sidebar">
                <Link to="/admin" className="sidebar-links">Dashboard</Link>
                <Link to="/admincreateadmin" className="sidebar-links">Create Admin</Link>
                <Link to="/admin-login" className="sidebar-links">Admin Login</Link>
                <Link to="/admin-create-user" className="sidebar-links">Create User</Link>
                <Link to="/admin-create-agent" className="sidebar-links">Create Agent</Link>
                {/* <Link to="/admin-create-property/:id" className="sidebar-links">Edit Property</Link> */}
                <Link to="/admin-user-view" className="sidebar-links">View User</Link>
                <Link to="/admin-property-unverified" className="sidebar-links">View Unverified Property</Link>
                <Link to="/admin-property-verified" className="sidebar-links">View Verified Property</Link>
                <Link to="/admin-agent-view" className="sidebar-links">View Agent</Link>
                <Link to="/admin-wishlist" className="sidebar-links">View Wishlist</Link>
            </ul>
        </div>
    )
}

export default AdminSidebar;