import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Btn from "../components/Btn";
import img1 from "../components/images/home.jpg";
import img2 from "../components/images/home2.jpg";

function ProductView() {

    // const [products, setProducts] = useState([]);

    // const getProduct = (category) => {
    //     fetch("http://159.65.21.42:9000/products")
    //         .then((output) => output.json())
    //         .then((resp) => {
    //             const getCategory = resp.filter((result) => result.category === category)
    //             setProducts(getCategory);
    //             console.log(getCategory);
    //         })
    //         .catch((err) => console.log(err.message));
    // }

    // useEffect(() => {
    //     getProduct("DPDebby")
    // }, [])


    // const editPrd = (id) => {

    // }

    // const deletePrd = (id) => {
    //     if (window.confirm("Do you want to delete?")) {
    //         fetch(`http://159.65.21.42:9000/product/${id}`, {
    //             method : "DELETE",
    //         }).then((resp) => {
    //             alert("Delete Successful");
    //             // window.location.reload();
    //         }).catch((err) => console.log(err.message))
    //     }
    // };


    return (
        <div>
            <Navigation />
            <div className="admin-dashboard">
                <Sidebar />
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

export default ProductView;