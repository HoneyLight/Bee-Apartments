import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import img1 from "../image/home.jpg";
import { useState } from "react";
import { useEffect } from "react";

function AdminPropertyUnverified() {
    const [unverified, setUnverified] = useState([]);
    const [verify, setVerify] = useState()


    let getToken = localStorage.getItem("merchantToken")

    useEffect(() => {
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified=false', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${getToken}`
            }
        })
            .then((resp) => resp.json())
            .then((output) => {
                setUnverified(output.data)
                console.log(output.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    const verifyProperty = (propId) => {
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified=false', {
            method: "GET",
            headers: { 'Content-Type': 'application/json',
             "authorization": `Bearer ${getToken}` },
        })
            .then((resp) => resp.json())
            .then((output) => {
                console.log(output)
                
                const updateOutput = output.data.find((item) => {
                    if (item.id === propId) {
                        // console.log(item)
                        item.is_verified = true;
                        setVerify(item.is_verified);
                        localStorage.setItem("is_verified", JSON.stringify(item))
                        console.log(item);

                        fetch(`http://property.reworkstaging.name.ng/v1/properties/${item.id}/set-verified`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json",
                             "authorization": `Bearer ${getToken}` },
                            body: JSON.stringify({ is_verified: true }),
                        })
                            .then((response) => {
                                if (!response) {
                                    throw new Error("Property verification failed!")
                                }
                                else {
                                    alert("Verification sucessful!")
                                    console.log(response);
                                }
                            })
                            .catch((err) => {
                                console.log(err.message)
                            })
                    }
                })
                console.log(updateOutput);

            }).catch((err) => {
                console.log(err.message)
            })
    }



    let merchantToken = localStorage.getItem("merchantToken");

    const deleteProperty = (id) => {
        fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${merchantToken}`
            }
        })
        .then((resp) => resp.json()).then((data) => {
            const deletePro = data.filter((del) => del.id !== id);
            setUnverified(deletePro);
            console.log(data);
        }).catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Unverified Apartments</h2>
                    </div>
                    <div className="product-menu">
                        <div className="products">
                            {
                                unverified && unverified.map((data) => (
                                    <div className="product">
                                        <img src={data.images} alt="" />
                                        <h3>{data.name}</h3>
                                        <p>{data.category}</p>
                                        <h4>₦{data.price}</h4>
                                        <p>{data.city}</p>
                                        <p>{data.country}</p>
                                        <div className="product-btns">
                                            <button onClick={() => verifyProperty(data.id)}>Verify</button>
                                            <button onClick={() => deleteProperty(data.id)}>Delete</button>
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

export default AdminPropertyUnverified;