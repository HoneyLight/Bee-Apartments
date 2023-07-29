import { useEffect, useState } from "react";
import "../components/Admin/Admin.css";
import Navigation from "../components/Navigation";


function Wishlist() {
    const [property, setProperty] = useState()
    const user_id = localStorage.getItem("user_id");
    const getToken = localStorage.getItem("merchantToken");

    const getWishlist = () => {
        fetch(`http://property.reworkstaging.name.ng/v1/users/${user_id}/wishlist`, {
            headers: { "Authorization": `Bearer ${getToken}` },
        })
            .then((resp) => resp.json())
            .then((data) => {
                // let output = data.data;
                // let wishlistOutput = output.filter((item) => wishlistOutput === item.id);
                setProperty(data.data);
                console.log(data.data);
            })
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <div>
            {/* <Navigation /> */}
            <div className="main-dash">
                <div className="header">
                    <h2>Wishlist</h2>
                </div>
                <div className="product-menu">
                    <div className="products">
                        {
                            property && property.map((item) => (
                                <div className="product">
                                    <img src={item.property.image} alt="Product" />
                                    <h3>{item.property.name}</h3>
                                    <p>{item.property.category}</p>
                                    <p>{item.property.country}</p>
                                    <h4>₦{item.property.price}</h4>
                                    <p>{item.created_at}</p>
                                    <p>Agent: {item.agent.full_name}</p>
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
    )
}

export default Wishlist;