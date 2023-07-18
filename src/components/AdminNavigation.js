import { IoPerson, IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AdminNavigation() {
    return (
        <div>
            <nav>
                <div class="navbar">
                    <div class="home-logo">
                        <Link to="/">
                            {/* <img src={logo} alt="" /> */}
                            <h1>Logo</h1>
                        </Link>
                    </div>
                    <div class="icons">
                        <Link className="nav-icons"><IoNotificationsOutline /></Link>
                        <Link className="nav-icons">
                            <IoPerson />
                        </Link>
                        <Link className="nav-person">Admin</Link>
                        <Link className="nav-person" to="/status">Status</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavigation;

