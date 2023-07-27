import { useNavigate } from "react-router-dom";
import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AdminUserView() {
    const [user, setUser] = useState([]);
    const Navigate = useNavigate();
    const {id} = useParams();

    let getToken = localStorage.getItem("merchantToken");

    fetch("http://property.reworkstaging.name.ng/v1/users", {
        method: "GET",
        headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
    })
    .then((resp) => resp.json())
    .then((data) => {
        setUser(data.data);
    }).catch((err) => {
        console.log(err.message)
    });

    const editUser = (id) => {
        fetch(`http://property.reworkstaging.name.ng/v1/users/${id}`, {
            method: "GET",
            headers: 
        })
    }

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
                                <button onClick={() => Navigate("/admin-create-user")}>Edit</button>
                                <button>Delete</button>
                                {/* <Btn title="Edit" bgColor="rgb(125, 75, 28)" /> */}
                                {/* <Btn title="Delete" bgColor="#ac0d0d" /> */}
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

export default AdminUserView;