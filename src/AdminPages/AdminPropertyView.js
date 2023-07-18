import "./Admin.css";
import AdminNavigation from "../components/AdminNavigation";
import AdminSidebar from "../components/AdminSidebar";
import Btn from "../components/Btn";
import img1 from "../components/images/home.jpg";
import img2 from "../components/images/home2.jpg";

function AdminPropertyView() {

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Apartments</h2>
                    </div>
                    <div className="product-menu">
                        <div className="products">
                            <div className="product">
                                <img src={img1} alt="Product" />
                                <h3>Beach Home</h3>
                                <p>A fine beach house suitable for you and bae</p>
                                <h4>₦800,000,000</h4>
                                <div className="product-btns">
                                    <Btn title="Edit" bgColor="rgb(125, 75, 28)" />
                                    <Btn title="Delete" bgColor="#ac0d0d" />
                                </div>
                            </div>
                            <div className="product">
                                <img src={img2} alt="Product" />
                                <h3>Bay Home</h3>
                                <p>A fine beach house suitable for you and bae</p>
                                <h4>₦1,000,000,000</h4>
                                <div className="product-btns">
                                    <Btn title="Edit" bgColor="rgb(125, 75, 28)" />
                                    <Btn title="Delete" bgColor="#ac0d0d" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPropertyView;