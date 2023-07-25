import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";
// import Btn from "../components/Btn";

function AdminAgentView() {
    const [agent, setAgent] = useState([]);
   

    let getToken = localStorage.getItem("agentToken");

    fetch("http://property.reworkstaging.name.ng/v1/agents", {
        method: "GET",
        headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
    })
    .then((resp) => resp.json())
    .then((data) => {
        setAgent(data);
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
                            <th>Phone Number</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                        {
                            agent && agent.map((data, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data.full_name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.password}</td>
                            <td>
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

export default AdminAgentView;