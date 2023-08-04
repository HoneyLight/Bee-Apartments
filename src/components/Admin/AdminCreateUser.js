import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AdminCreateUser() {
    // const {id} = useParams();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    let getToken = localStorage.getItem("merchantToken");
    let user_id = localStorage.getItem("user_id")

    useEffect(() => {
        fetch(`http://property.reworkstaging.name.ng/v1/users/${user_id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((resp) => resp.json())
            .then((output) => {
                setFirstname(output.firstname);
                setLastname(output.lastname);
                setEmail(output.email);
                setPhone(output.phone);
                setPassword(output.password);

                console.log(output);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);



    const handleCreate = (e) => {
        e.preventDefault();
        if (firstname === "" || lastname === "" || phone === "" || email === "" || password === "") {
            setErr(true);
            return;
        }
        let user = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone: phone,
            password: password,
        };


        fetch(`http://property.reworkstaging.name.ng/v1/users/${user_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${getToken}`
            },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                alert("User updated successfully");
                console.log(data);
            }).catch((err) => {
                console.log(err.message)
            });
    }

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Edit User</h2>
                    </div>
                    <form className="admin-form" onSubmit={handleCreate}>
                        <div className="admin-form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            {err && firstname === "" ? <span>FirstName Required</span> : null}
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            {err && lastname === "" ? <span>LastName Required</span> : null}
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {err && phone === "" ? <span>Phone Required</span> : null}
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {err && email === "" ? <span>Email Required</span> : null}
                        </div>
                        <div className="admin-form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {err && password === "" ? <span>Password Required</span> : null}
                        </div>
                        <button>Edit User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateUser;