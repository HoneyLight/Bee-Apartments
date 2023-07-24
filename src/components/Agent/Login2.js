import { useState } from "react";
import Sidebar from "./Sidebar";
function Login2(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (  email === ""  ||  password === ""  ){
            setErr (true);
           return;
        }

        let agentLogin = {
            email: email,
            password: password,
        };

        fetch("http://property.reworkstaging.name.ng/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(agentLogin),
        })
        .then((resp) => resp.json())
        .then((data) => {
            let getToken = data.data.token;
            localStorage.setItem("agentToken", getToken);
            console.log(data);
            alert("You have successfully Logged in")
        }).catch((err) => (err.message));
 }

    return(
        <div className="page">
            <Sidebar/>
            <form className="forms" onSubmit={handleSubmit} >
                     <h2>Login</h2>
                <div className="form-group"> 
                 <input type="email" value={email} placeholder="johndoe@gmail.com*" onChange={(e) => setEmail(e.target.value)} />
                 {err === true && email === "" ? <span>Email is Required</span> : null}
             </div>
    
             <div className="form-group"> 
                 <input type="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
                 {err === true && password === "" ? <span> password is Required</span> : null}
             </div>

            <div className="form-btn">
            <button>Submit</button>
            </div>
            </form>
            
        </div>
    )
}
export default Login2;