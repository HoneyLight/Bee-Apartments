import { IoLogoGoogle, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErr(true);
            return;
        }

        let userLogin = {
            email: email,
            password: password,
        };

        fetch("http://property.reworkstaging.name.ng/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(userLogin),
        })
        .then((resp) => resp.json())
        .then((data) => {
            let getToken = data.data.token;
            localStorage.setItem("userToken", getToken);
            console.log(data);
            alert("You have successfully Logged in")
        }).catch((err) => (err.message));

    }
    return (
        <div className="page">
            <form className="form" onSubmit={handleSubmit} >
                <h2>Login</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <input type="text" value={email} placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
                        {err === true && email === "" ? <span>Email is Required</span> : null}
                    </div>
                </div>
                <div className="form-group">
                    <input type="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
                    {err === true && password === "" ? <span> password is Required</span> : null}
                </div>

                <div className="form-checkbox">
                    <input type="checkbox" />
                    <span htmlFor="">Remember Me</span>
                    <h4>Lost Your Password?</h4>
                </div>

                <div className="form-btn">
                    <button>submit</button>
                </div>
                <div className="form-link">
                    <p>Not a Member? <Link to="/Signup" className="link">Register Here</Link></p>
                </div>
                <div className="form-icon">
                    <p><IoLogoGoogle /></p>
                    <p><IoLogoTwitter /></p>
                    <p><IoLogoFacebook /></p>
                </div>
            </form>

        </div>
    )
}
export default Login;