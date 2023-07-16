import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { useState } from "react";


function CreateUser() {
    const [name, setName] = useState("");
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
        let user = {
            name: name,
            phone: phone,
            email: email,
            password: password,
        };
    }

    return (
        <div>
            <Navigation />
            <div className="admin-dashboard">
                <Sidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Create User</h2>
                    </div>
                    <form className="admin-form" onSubmit={handleCreate}>
                        <div className="admin-form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {err && name === "" ? <span>Name Required</span> : null}
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
                        <button>Create User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;