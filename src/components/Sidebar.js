import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <div className="sidebar-main">
            <ul className="sidebar">
                <Link to="/" className="sidebar-links">Dashboard</Link>
                <Link to="/create-user" className="sidebar-links">Create User</Link>
                <Link to="/create-agent" className="sidebar-links">Create Agent</Link>
                <Link to="/create-property" className="sidebar-links">Create Property</Link>
                <Link to="/user-view" className="sidebar-links">View User</Link>
                <Link to="/product-view" className="sidebar-links">View Property</Link>
                <Link to="/agent-view" className="sidebar-links">View Agent</Link>
            </ul>
        </div>
    )
}

export default Sidebar;