import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";
// import Btn from "../components/Btn";

function AdminAgentView() {
    const [agent, setAgent] = useState([]);
   

    let getToken = localStorage.getItem("merchantToken");

    fetch("http://property.reworkstaging.name.ng/v1/merchants/agents", {
        method: "GET",
        headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
    })
    .then((resp) => resp.json())
    .then((data) => {
        setAgent(data.data);
    }).catch((err) => {
        console.log(err.message)
    });


    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Agents</h2>
                    </div>
                    <table className="userview" >
                        <tr>
                            <th>S/No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                        {
                            agent && agent.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.full_name}</td>
                            <td>{item.email}</td>
                            <td>{item.company}</td>
                            <td>
                                <button>Verify</button>
                                <button>Edit</button>
                                <button>Delete</button>
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

export default AdminAgentView;