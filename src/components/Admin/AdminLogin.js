import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";



function AdminLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const AdminLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErr(true);
            return;
        }
        let admin = {
            email: email,
            password: password,
        };

        fetch("http://property.reworkstaging.name.ng/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(admin),
        })
        .then((resp) => resp.json())
        .then((output) => {
            let getToken = output.data.token;
            localStorage.setItem("merchantToken", getToken);
            console.log(output);
            alert("Merchant Logged in Successfully")
        }).catch((err) => console.log((err.message)))
    }



    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Admin Login</h2>
                    </div>
                    <form className="admin-form" onSubmit={AdminLogin}>
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
                        <button>Admin Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;