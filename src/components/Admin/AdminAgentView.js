import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
// import Btn from "../components/Btn";

function AdminAgentView() {
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
                        <tr>
                            <td>1</td>
                            <td>Debby Inyang</td>
                            <td>debbyinyang@gmail.com</td>
                            <td>09056784567</td>
                            <td>0000</td>
                            <td>
                                {/* <Btn title="Edit" bgColor="rgb(125, 75, 28)" /> */}
                                {/* <Btn title="Delete" bgColor="#ac0d0d" /> */}
                            </td>
                        </tr>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default AdminAgentView;