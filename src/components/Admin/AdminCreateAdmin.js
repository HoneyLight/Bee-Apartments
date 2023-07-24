import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";



function AdminCreateAdmin(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const AdminCreate = (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || password === "") {
            setErr(true);
            return;
        }
        let admin = {
            full_name: name,
            email: email,
            phone: phone,
            password: password,
        };

        fetch("http://property.reworkstaging.name.ng/v1/merchants", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(admin),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            alert("Merchant Created")
        }).catch((err) => console.log((err.message)))
    }



    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Create Admin</h2>
                    </div>
                    <form className="admin-form" onSubmit={AdminCreate}>
                        <div className="admin-form-group">
                            <label htmlFor="">Full Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {err && name === "" ? <span> Full Name Required</span> : null}
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
                        <button>Create Admin</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateAdmin;