import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import img1 from "../image/home.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPropertyVerified() {
    const [verified, setVerified]= useState();
    const Navigate = useNavigate();

    let getToken = localStorage.getItem('merchantToken');
    // console.log(getToken)

    useEffect(()=>{
        fetch("http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified=true", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
        .then((resp)=> resp.json())
        .then((output)=> {
            setVerified(output.data);
            console.log(output.data);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const editProperty = (id) => {
        Navigate(`/admin-create-property/${id}`)
    }


    // const deleteProperty= (id)=>{
    //   fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`,{
    //     method:"DELETE",
    //     headers:{'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${merchantToken}`}
    //   })
    //   .then((resp)=> resp.json())
    //   .then((data)=>{
    //     const updateDelete = data.filter((del)=> del.id !== id)
    //     setVerified(updateDelete)
    //     console.log(data)
    //   })
    //   .catch((err) => err.message)
    // console.log(id)
    // }
    


    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash">
                    <div className="header">
                        <h2>Verified Apartments</h2>
                    </div>
                    <div className="product-menu">
                        <div className="products">
                            {
                                verified && verified.map((data) => (
                                    <div className="product">
                                        <img src={data.image} alt="Product" />
                                        <h3>{data.name}</h3>
                                        <p>{data.category}</p>
                                        <p>{data.city}</p>
                                        <p>{data.country}</p>
                                        <h4>₦{data.price}</h4>
                                        <div className="product-btns">
                                            <button onClick={() => editProperty(data.id)}>Edit</button>
                                            {/* <button onClick={() => deleteProperty(data.id)}>Delete</button> */}
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

export default AdminPropertyVerified;