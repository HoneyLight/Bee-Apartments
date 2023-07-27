import { Link } from "react-router-dom";
import { useState } from "react";
function Signup(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [owner, setOwner] = useState("");
    const [err, setErr] = useState(false);
    
   
   
    const handleSubmit = (e) => {
       e.preventDefault();
       if (  firstname === "" || lastname === "" ||  email === "" ||  password === ""  || repeat === ""  || owner === "" ){
           setErr (true);
          return;
       }

       let user = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: phone,
        password: password,
       }

       let getToken = localStorage.getItem("merchantToken");

        fetch("http://property.reworkstaging.name.ng/v1/users", {
            method: "POST",
            headers: {"Content-Type" : "application/json", "authorization": `Bearer ${getToken}`},
            body: JSON.stringify(user),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            alert("You have registered Successfully");
        }).catch((err) => (err.message))

}


    return(
        <div className="page">
        <form className="form" onSubmit={handleSubmit} >
         <h2>Register</h2>
            <div className="form-grid">
            <div className="form-group"> 
                 <input type="text" value={firstname} placeholder="First Name*" onChange={(e) => setFirstname(e.target.value)} />
                 {err === true && firstname === "" ? <span>Firstname is Required</span> : null}
             </div>
            <div className="form-group"> 
                 <input type="text" value={lastname} placeholder="Last Name*" onChange={(e) => setLastname(e.target.value)} />
                 {err === true && lastname === "" ? <span>Lastname is Required</span> : null}
             </div>

             <div className="form-group"> 
                 <input type="text" value={email} placeholder="Email*" onChange={(e) => setEmail(e.target.value)} />
               {err === true && email === "" ? <span>Email is Required</span> : null}
             </div>
            </div>
             <div className="form-group"> 
                 <input type="text" value={phone} placeholder="Phone Number*" onChange={(e) => setPhone(e.target.value)} />
                 {err === true && phone === "" ? <span> Phone number is Required</span> : null}
             </div>
             <div className="form-group"> 
                 <input type="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} />
                 {err === true && password === "" ? <span> password is Required</span> : null}
             </div>

             <div className="form-group"> 
                 <input type="password" value={repeat} placeholder="Repeat Password*" onChange={(e) => setRepeat(e.target.value)} />
                 {err === true && repeat === "" ? <span>Repeat password is Required</span> : null}
             </div>

            <div className="form-group">      
              <select value={owner} placeholder="Owner/Buyer*" onChange={(e) => setOwner(e.target.value)} > 
              <option value="">select</option>
                <option value="Owner/Buyer">Owner/Buyer</option>               
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