import "./Admin.css";
import AdminNavigation from "../components/AdminNavigation";
import AdminSidebar from "../components/AdminSidebar";
import { IoPeople, IoCart, IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


function AdminDashboard() {

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="section1">
                        <div className="box">
                            <div className="svg1">
                                <IoHomeSharp />
                            </div>
                            <div>
                                <h5>Total Property</h5>
                                <h4 id="totalPrd">0</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="svg2">
                                <IoPeople />
                            </div>
                            <div>
                                <h5>Total Agents</h5>
                                <h4>0</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="svg3">
                                <IoCart />
                            </div>
                            <div>
                                <h5>Items in Wishlist</h5>
                                <h4>0</h4>
                            </div>
                        </div>
                        <div className="box flex">
                            <div className="svg4">
                                <CgProfile />
                            </div>
                            <div>
                                <h5>Total Users</h5>
                                <h4>0</h4>
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <table className="table">
                            <tr>
                                <th>S/No</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Category</th>
                                <th>Product Description</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Beach Home</td>
                                <td>₦1,000,000,000</td>
                                <td>Bee</td>
                                <td>A Luxury Home</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;