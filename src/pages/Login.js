import { IoLogoGoogle, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setErr(true);
            return;
        }

    }
    return (
        <div className="page">
            <form className="form" onSubmit={handleSubmit} >
                <h2>Login</h2>
                <div className="form-grid">
                    <div className="form-group">
                        <input type="text" value={username} placeholder="User Name*" onChange={(e) => setUsername(e.target.value)} />
                        {err === true && username === "" ? <span>Username is Required</span> : null}
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