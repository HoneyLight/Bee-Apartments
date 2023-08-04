import Sidebar from "./Sidebar";
import apa1 from "./img/Apartment1.avif";
import { useState, useEffect } from "react";
import Btn from "./Btn";

function Viewpro() {
    const [unverified, setUnverified] = useState([]);
    const [verify, setVerify] = useState()


    let getToken = localStorage.getItem("merchantToken");
    let agentToken = localStorage.getItem("agentToken")

    useEffect(() => {
        fetch('http://property.reworkstaging.name.ng/v1/properties?agent=64bd949fec5946cdadd37750', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${agentToken}`
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

   




    // const deleteProperty = (id) => {
    //     fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${merchantToken}`
    //         }
    //     })
    //     .then((resp) => resp.json()).then((data) => {
    //         const deletePro = data.filter((del) => del.id !== id);
    //         setUnverified(deletePro);
    //         console.log(data);
    //     }).catch((err) => {
    //             console.log(err.message)
    //         })
    // }


    return (
        <div>
            <Sidebar />
            <main className="page">
                <div className="re-destination">
                    <h1>Apartment</h1>
                    <div className="main-destination">
                        {
                            unverified && unverified.map((data) => (
                                <div className="inner-destination">
                                    <div className="main-image">
                                        <img src={data.images} alt="" />
                                    </div>
                                    <h2>{data.city}, {data.country}</h2>
                                    <p>₦{data.price}</p>
                                    <h3>{data.name} * {data.bedroom} beds * {data.total_area}</h3>
                                    <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                                    <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Viewpro;