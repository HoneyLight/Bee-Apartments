import { Link } from "react-router-dom";
import { useState } from "react";
function Signup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [owner, setOwner] = useState("");
    const [err, setErr] = useState(false);
    
   
   
    const handleSubmit = (e) => {
       e.preventDefault();
       if (  username === "" ||  email === "" ||  password === ""  || repeat === ""  || owner === "" ){
           setErr (true);
          return;
       }

}


    return(
        <div className="page">
        <form className="form" onSubmit={handleSubmit} >
         <h2>Register</h2>
            <div className="form-grid">
            <div className="form-group"> 
                 <input type="text" value={username} placeholder="User Name*" onChange={(e) => setUsername(e.target.value)} />
                 {err === true && username === "" ? <span>Username is Required</span> : null}
             </div>

             <div className="form-group"> 
                 <input type="text" value={email} placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
               {err === true && email === "" ? <span>Email is Required</span> : null}
             </div>
            </div>
             <div className="form-group"> 
                 <input type="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
                 {err === true && password === "" ? <span> password is Required</span> : null}
             </div>

             <div className="form-group"> 
                 <input type="password" value={repeat} placeholder="Repeat Password*" onChange={(e) => setRepeat(e.target.value)} />
                 {err === true && repeat === "" ? <span>Repeat is Required</span> : null}
             </div>

            <div className="form-group">      
              <select value={owner} placeholder="Owner/Buyer*" onChange={(e) => setOwner(e.target.value)} > 
                <option value="Select">Owner/Buyer</option>               
                <option value="Agency">Agency</option>
                </select>
                {err === true && owner === "" ? <span>Required</span> : null}
             </div>
             <div className="form-txt">
                <h5>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</h5>
             </div>
            <div className="form-btn">
            <button>submit</button>
            </div>
            <div className="form-link">
            <p>Have an Account? <Link to="/Login" className="link">Log In</Link></p>
            </div>
            </form>
            
    
        </div>
    )
}
export default Signup;