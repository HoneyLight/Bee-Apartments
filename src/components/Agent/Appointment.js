import { useState } from "react";
import Sidebar from "./Sidebar";
function Appointment(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (  name === ""  ||  description === "" ){
            setErr (true);
           return;
        }
 }
    return(
        <div>
            <div className="page">
            <Sidebar/>
            <form className="forms" onSubmit={handleSubmit} >
                     <h2>Appointment</h2>
                <div className="form-group"> 
                 <input type="text" value={name} placeholder="Full Name*" onChange={(e) => setName(e.target.value)} />
                 {err === true && name === "" ? <span>Full Name is Required</span> : null}
             </div>

             <div className="form-group"> 
             <label htmlFor="">Date of Appointment</label>
                 <input type="date" value={name} placeholder="Date Of Appointment*" onChange={(e) => setName(e.target.value)} />
                 {err === true && name === "" ? <span>Date is Required</span> : null}
             </div>

             <div className="form-group"> 
             <label htmlFor="">Time of Appointment</label>
                 <input type="time" value={name} placeholder="Time Of Appointment*" onChange={(e) => setName(e.target.value)} />
                 {err === true && name === "" ? <span>Time is Required</span> : null}
             </div>

             <div className="form-group"> 
                 <input type="text" value={name} placeholder="Address*" onChange={(e) => setName(e.target.value)} />
                 {err === true && name === "" ? <span>Address is Required</span> : null}
             </div>

        <div className="form-group">
          <textarea
          placeholder="Comment....*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {err === true && description === '' ? <span>Comment is Required</span> : null}
        </div>

            <div className="form-btn">
            <button>submit</button>
            </div>
            </form>
            
        </div>
        </div>
    )
}

export default Appointment;