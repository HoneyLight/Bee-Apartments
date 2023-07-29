import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { IoPeople, IoCart, IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";


function AdminDashboard() {
    const [agent, setAgent] = useState([]);
    const [verified, setVerified]= useState("");
    const [wishlist, setWishlist] = useState("");
    const merchant_id = localStorage.getItem("merchant_id");
    const getToken = localStorage.getItem("merchantToken");
    const [user, setUser] = useState([]);


    // Users
    fetch("http://property.reworkstaging.name.ng/v1/users", {
        method: "GET",
        headers: { "Content-Type": "application/json", "authorization": `Bearer ${getToken}` },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data.data);
        }).catch((err) => {
            console.log(err.message)
        });

    
    // Agents
    fetch("http://property.reworkstaging.name.ng/v1/merchants/agents", {
        method: "GET",
        headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
    })
    .then((resp) => resp.json())
    .then((data) => {
        setAgent(data.data);
    }).catch((err) => {
        // console.log(err.message)
    });
    

    // verified properties    
    useEffect(()=>{
        fetch("http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
        .then((resp)=> resp.json())
        .then((output)=> {
            setVerified(output.data);
            // console.log(output.data);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    
    // Wishlist
    useEffect(() => {
        fetch(`http://property.reworkstaging.name.ng/v1/merchants/${merchant_id}/wishlist`, {
            headers: { "Authorization": `Bearer ${getToken}` },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setWishlist(data.data);
                // console.log(data.data);
            })
    }, []);
   

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
                                <h4 id="totalPrd">{verified.length}</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="svg2">
                                <IoPeople />
                            </div>
                            <div>
                                <h5>Total Agents</h5>
                                <h4>{agent.length}</h4>
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
                                <h4>{user.length}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <table className="table">
                            <tr>
                                <th>S/No</th>
                                <th>Property Name</th>
                                <th>Property Price</th>
                                <th>Property Category</th>
                                <th>Property Country</th>
                            </tr>
                            {
                                verified && verified.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>₦{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.country}</td>
                            </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;