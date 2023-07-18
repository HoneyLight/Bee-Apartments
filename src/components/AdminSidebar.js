import { Link } from "react-router-dom";

function AdminSidebar() {
    return(
        <div className="sidebar-main">
            <ul className="sidebar">
                <Link to="/admin" className="sidebar-links">Dashboard</Link>
                <Link to="/admin-create-user" className="sidebar-links">Create User</Link>
                <Link to="/admin-create-agent" className="sidebar-links">Create Agent</Link>
                <Link to="/admin-create-property" className="sidebar-links">Create Property</Link>
                <Link to="/admin-user-view" className="sidebar-links">View User</Link>
                <Link to="/admin-property-view" className="sidebar-links">View Property</Link>
                <Link to="/admin-agent-view" className="sidebar-links">View Agent</Link>
            </ul>
        </div>
    )
}

export default AdminSidebar;