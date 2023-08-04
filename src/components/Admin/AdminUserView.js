import { useNavigate } from "react-router-dom";
import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

function AdminUserView() {
    const [user, setUser] = useState([]);
    const Navigate = useNavigate();

    let getToken = localStorage.getItem("merchantToken");

    fetch("http://property.reworkstaging.name.ng/v1/users", {
        method: "GET",
        headers: { "Content-Type": "application/json", "authorization": `Bearer ${getToken}` },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data.data);
        }).catch((err) => {
            console.log(err.message)
        });



    const editUser = (id) => {
        Navigate(`/admin-create-user/${id}`)
    }

    const deleteUser = (id) => {
        fetch(`http://property.reworkstaging.name.ng/v1/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        })
            .then((resp) => resp.json()).then((data) => {
                const deleteuser = data.filter((del) => del.id !== id);
                setUser(deleteuser);
                console.log(data);
            }).catch((err) => {
                console.log(err.message)
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
                                        <button onClick={() => editUser(data.id)}>Edit</button>
                                        <button onClick={() => deleteUser(data.id)}>Delete</button>
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