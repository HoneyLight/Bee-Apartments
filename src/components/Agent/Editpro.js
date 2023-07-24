import { useState } from "react";
import Sidebar from "./Sidebar";
function Editpro(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (  name === ""  ||  price === "" ||  category === "" ||  location === ""  ||  description === "" ){
            setErr (true);
           return;
        }
 }
    return(
        <div>
            <div className="page">
            <Sidebar/>
            <form className="forms" onSubmit={handleSubmit} >
                     <h2>Edit Property</h2>
                <div className="form-group"> 
                 <input type="text" value={name} placeholder="Name*" onChange={(e) => setName(e.target.value)} />
                 {err === true && name === "" ? <span>Name is Required</span> : null}
             </div>

             <div className="form-group">
          <select placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Select">Category.....*</option>
            <option value="property">Apartment</option>
            <option value="property">Modular Building</option>
            <option value="property">Town House</option>
            <option value="property">Industrial Building</option>
            <option value="property">Skyscraper</option>
            <option value="property">School Building</option>
            <option value="property">Condonimium</option>
            <option value="property">Residential Building</option>
            <option value="property">Factory</option>
          </select>
          {err === true && category === '' ? <span> Category is Required</span> : null}
        </div>

        {/* <div className="form-group"> 
                 <input type="text" value={price} placeholder="Price*" onChange={(e) => setPrice(e.target.value)} />
                 {err === true && price === "" ? <span>Price is Required</span> : null}
             </div> */}

        <div className="form-group">
          <textarea
          placeholder="Description....*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {err === true && description === '' ? <span>Description is Required</span> : null}
        </div>

        <div className="form-group">
          <textarea
          placeholder="Location....*"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></textarea>
          {err === true && location === '' ? <span>Location is Required</span> : null}
        </div>


            <div className="form-btn">
            <button>submit</button>
            </div>
            </form>
            
        </div>
        </div>
    )
}
export default Editpro;