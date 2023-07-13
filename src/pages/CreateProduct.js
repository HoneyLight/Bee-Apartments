import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [quantity, setQty] = useState("");
    const [img, setImg] = useState("");
    const [err, setErr] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (name === "" || price === "" || category === "" || quantity === "" || desc === "" || img === "") {
            setErr(true);
            return;
        }
        let product = {
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            image: img,
            description: desc,
        };

        // fetch("http://159.65.21.42:9000/create/product", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(product),
        // })
        // .then((resp) => resp.json())
        // .then((data) => {
        //     alert("Product created successfully")
        //     console.log(data);
        // })
        // .catch((err) => console.log(err));
    }

    return(

        
        <div>
            <Navigation/>
            <div className="admin-dashboard">
                <Sidebar/>
            <div className="main-dash create-prd">
                <div className="header">
                    <h2>Create Product</h2>
                </div>
                <form className="form" onSubmit={handleCreate}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {err && name === "" ? <span>Name Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Homes">Homes</option>
                        </select>
                        {err && category === "" ? <span>Category Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        {err && price === "" ? <span>Price Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input type="text" value={quantity} onChange={(e) => setQty(e.target.value)} />
                        {err && quantity === "" ? <span>Quantity Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                        {err && desc === "" ? <span>Description Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Image</label>
                        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                        {err && img === "" ? <span>Image Required</span> : null}
                    </div>
                    <button>Create Product</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default CreateProduct;