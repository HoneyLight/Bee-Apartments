import "./ShopSection.css"
import { useState, useEffect } from "react";
import { IoLocationOutline, IoStarOutline, IoBedOutline } from "react-icons/io5";
import { TbResize } from "react-icons/tb";
import land from "./image/land.jpeg";
import bath from "./image/bath.png";
import bed from "./image/bed.png";
import mod from "./image/mod.jpg";
import { Link } from "react-router-dom";
import Wishlist from "../pages/Wishlist";


function ShopSection() {
    const [shop, setShop] = useState();

    let getToken = localStorage.getItem("merchantToken");

    useEffect(() => {
        fetch("http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified=true", {
            method: "GET",
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${getToken}` },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShop(data.data);
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, [])


    const wishlist = (id) => {
        let user_id = localStorage.getItem("user_id");
        let property_id = id;

        let wish = {
            property_id: property_id,
            user_id: user_id,
        }
        console.log(user_id)

        fetch(`http://property.reworkstaging.name.ng/v1/users/wishlist`, {
            method: "POST",
            headers: { "Content-Type": "Application/json", "authorization": `Bearer ${getToken}` },
            body: JSON.stringify(wish),
        }).then((resp) => resp.json()).then((data) => {
            console.log(data);
            alert("Item added to Wishlist");
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div className="shopsection"><br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className="our-choice-h1">Our choice of <br />
                popular real estate</h1>

            <div className='shop-property'>
                {
                    shop && shop.map((item, i) => (
                        <div className="shop-property-row">
                            <div className="shopDiv">
                                <Link to={`/Shop/${item.id}`} className="shop-link" key={i}>
                                    <img src={item.image} alt="" />
                                </Link>
                                <h5 className="sell">{item.type}</h5>
                                {/* <h5 className="wishlist"><IoStarOutline /></h5> */}
                                <p><IoLocationOutline />{item.name}</p>
                                <h2>{item.category}</h2>
                                <p>{item.city}</p><br />
                                <div><h3>₦{item.price}</h3></div>
                            </div>
                            <h4>____________________________________________________</h4>
                            <div className="shop-icons">
                                <button onClick={() => wishlist(item.id)}><IoStarOutline className="wish-icon" /></button>
                                <div className="resize-container"><TbResize className="resize-icon" />   <span>{item.total_area}</span></div>
                                <div><img src={bed} alt="bed" />    <span>{item.bedroom}</span></div>
                                <div><img src={bath} alt="bath" />   <span>{item.bathroom}</span></div>
                            </div>
                        </div>
                    ))
                }
            </div><br /><br />
            <div className="browse-more-properties"><br /><br /><br /><br />
                <button>Browse More Properties</button><br /><br /><br /><br />
                <div className="modern-spaces-container">

                    <div className="colum1">
                        <div className="background-colour"></div>
                        <div><img src={mod} alt="mod" /></div>
                    </div>
                    <div className="colum2">
                        <h1>Modern spaces and <br />premium design</h1><br />
                        <p>Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix primis viderere vituperatoribus. In corpora argumentum.</p><br />

                        <p>– Mea omnium explicari</p>
                        <p>– His no legere feugaitoer</p>
                        <p>– illum idquem</p><br />

                        <button>Search Property</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSection;