import { useNavigate } from "react-router-dom";
import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

function AdminAppointment() {
    const [user, setUser] = useState([]);
    const Navigate = useNavigate();

    let getToken = localStorage.getItem("merchantToken");


    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Users</h2>
                    </div>
                    <table className="userview" >
                        <tr>
                            <th>S/No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        {
                            user && user.map((data, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>
                                        <button>Confirm</button>
                                        <button>Reject</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminAppointment;