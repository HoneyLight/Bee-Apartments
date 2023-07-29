import { useEffect, useState } from "react";
import "./Admin.css";
import AdminSidebar from "./AdminSidebar";
import AdminNavigation from "./AdminNavigation";


function AdminWishlist() {
    const [property, setProperty] = useState()
    const merchant_id = localStorage.getItem("merchant_id");
    const getToken = localStorage.getItem("merchantToken");

    const getWishlist = () => {
        fetch(`http://property.reworkstaging.name.ng/v1/merchants/${merchant_id}/wishlist`, {
            headers: { "Authorization": `Bearer ${getToken}` },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProperty(data.data);
                console.log(data.data);
            })
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Wishlist</h2>
                    </div>
                    <div className="product-menu">
                        <div className="products">
                            {
                                property && property.map((item) => (
                                    <div className="product">
                                        <img src={item.image} alt="Product" />
                                        <h3>{item.name}</h3>
                                        <p>{item.category}</p>
                                        <p>{item.country}</p>
                                        <h4>₦{item.price}</h4>
                                        <p>{item.created_at}</p>
                                        {/* <p>Agent: {item.agent.full_name}</p> */}
                                        <div className="product-btns">
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminWishlist;