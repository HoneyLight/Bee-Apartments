import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";


function AdminCreateAgent() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || password === "") {
            setErr(true);
            return;
        }
        let agent = {
            full_name: name,
            company: company,
            email: email,
            phone: phone,
            password: password,
        };

        let getToken = localStorage.getItem("merchantToken");

        fetch("http://property.reworkstaging.name.ng/v1/agents", {
            method: "POST",
            headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
            body: JSON.stringify(agent),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            alert("Agent Created")
        }).catch((err) => (err.message))
    };

    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Create Agent</h2>
                    </div>
                    <form className="admin-form" onSubmit={handleCreate}>
                        <div className="admin-form-group">
                            <label htmlFor=""> Full Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {err && name === "" ? <span>Full Required</span> : null}
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="">Company</label>
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                            {err && company === "" ? <span>Company Required</span> : null}
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
                        <button>Create Agent</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateAgent;