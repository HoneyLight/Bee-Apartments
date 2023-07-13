import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import { IoPeople, IoCart, IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

function Dashboard() {

    // const [products, setProducts] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [cart, setCart] = useState([]);

    // const getUsers = () => {
    //     fetch("http://159.65.21.42:9000/users")
    //         .then((resp) => resp.json())
    //         .then((result) => {
    //             setUsers(result);
    //             console.log(result);
    //         })
    //         .catch((err) => console.log((err.message)));
    // }

    // useEffect(() => {
    //     getUsers();
    // }, []);

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
    // }, []);

    // const cartinfo = localStorage.getItem("cartstore");

    // const getCart = () => {
    //     if(cartinfo) {
    //         let cartLength = JSON.parse(cartinfo);
    //         setCart(cartLength);
    //     }
    // }
    // useEffect (() => {
    //     getCart();
    // }, [])

    return (
        <div>
            <Navigation />
            <div className="admin-dashboard">
                <Sidebar />
                <div className="main-dash">
                    <div className="section1">
                        <div className="box">
                            <div className="svg1">
                                <IoHomeSharp />
                            </div>
                            <div>
                                <h5>Total Products</h5>
                                <h4 id="totalPrd">0</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="svg2">
                                <IoCart />
                            </div>
                            <div>
                                <h5>Total Agents</h5>
                                <h4>0</h4>
                            </div>
                        </div>
                        <div className="box flex">
                            <div className="svg3">
                                <IoPeople />
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

export default Dashboard;