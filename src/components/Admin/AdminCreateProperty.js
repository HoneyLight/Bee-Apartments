import { useParams } from "react-router-dom";
import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useEffect, useState } from "react";

function AdminCreateProduct() {
    const { id } = useParams();


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [total_area, setTotalarea] = useState("");
    const [property_use, setPropertyUse] = useState("");
    const [payment_plan, setPaymentPlan] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [toilet, setToilet] = useState('')
    const [parking_space, setParkingSpace] = useState('')
    const [furnishing, setFurnishing] = useState('')
    const [disclaimer, setDisclaimer] = useState('')
    const [amenities, setAmenities] = useState('')
    const [err, setErr] = useState(false)

    let getToken = localStorage.getItem("merchantToken");
    // console.log(getToken);

    useEffect(() => {
        fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((resp) => resp.json())
            .then((output) => {
                setName(output.name);
                setPrice(output.price);
                setCountry(output.country);
                setState(output.state);
                setCity(output.city);
                setLat(output.lat);
                setLng(output.lng);
                setAddress(output.address);
                setDescription(output.description);
                setCategory(output.category);
                setTotalarea(output.total_area);
                setPropertyUse(output.property_use);
                setPaymentPlan(output.payment_plan);
                setType(output.type);
                setBedroom(output.bedroom);
                setBathroom(output.bathroom);
                setToilet(output.toilet);
                setParkingSpace(output.parking_space);
                setFurnishing(output.furnishing);
                setDisclaimer(output.disclaimer);
                setAmenities(output.amenities);

                console.log(output);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);


    const handleCreate = (e) => {
        e.preventDefault();
        if (name === "" || price === "" || country === "" || state === "" || city === "" || lat === "" || lng === "" || address === "" || description === "" || category === "" || total_area === "" || property_use === "" || payment_plan === "" || type === "" || bedroom === "" || bathroom === "" || toilet === "" || parking_space === "" || furnishing === "" || disclaimer === "" || amenities === "") {
            setErr(true);
            return;
        }

        let adminProperty = {
            name: name,
            price: price,
            country: country,
            state: state,
            city: city,
            lat: lat,
            lng: lng,
            address: address,
            description: description,
            total_area: total_area,
            property_use: property_use,
            payment_plan: payment_plan,
            type: type,
            bedroom: bedroom,
            bathroom: bathroom,
            toilet: toilet,
            parking_space: parking_space,
            furnishing: furnishing,
            disclaimer: disclaimer,
            amenities: amenities,
        };

        fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
            body: JSON.stringify(adminProperty),
        })
            .then((resp) => resp.json())
            .then((output) => {
                alert("Property updated successfully");
                console.log(output);
            })
            .catch((err) => {
                console.log(err.message)
            })

    };


    return (
        <div>
            <AdminNavigation />
            <div className="admin-dashboard">
                <AdminSidebar />
                <div className="main-dash create-prd">
                    <div className="header">
                        <h2>Create Property</h2>
                    </div>

                    <form className="admin-form" onSubmit={handleCreate}>
                        <div className="admin-form-grid">
                            <div className="admin-form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                {err && name === "" ? <span>Name Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Price</label>
                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                                {err && price === "" ? <span>Price Required</span> : null}
                            </div>


                            <div className="admin-form-group">
                                <label htmlFor="">Country</label>
                                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                                {err && country === "" ? <span>Country Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">State</label>
                                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                                {err && state === "" ? <span>State Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">City</label>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                {err && city === "" ? <span>City Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Latitude</label>
                                <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
                                {err && lat === "" ? <span>Latitude Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Longitude</label>
                                <input type="text" value={lng} onChange={(e) => setLng(e.target.value)} />
                                {err && lng === "" ? <span>Longtitude Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Address</label>
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                {err && address === "" ? <span>Address Required</span> : null}
                            </div>



                            <div className="admin-form-group">
                                <label htmlFor="">Category</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="flat">FLAT</option>
                                    <option value="studioapartment">APARTMENT</option>
                                    <option value="duplexapartment">DUPLEX</option>
                                    <option value="basementapartment">WAREHOUSE</option>
                                    <option value="triplex apartment">SHOP</option>
                                </select>
                                {err && category === "" ? <span>Category Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Total Area</label>
                                <input type="text" value={total_area} onChange={(e) => setTotalarea(e.target.value)} />
                                {err && total_area === "" ? <span>Total Area Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Property use</label>
                                <select value={property_use} onChange={(e) => setPropertyUse(e.target.value)}>
                                    <option value="">Select Property Use</option>
                                    <option value="business">RESIDENTIAL</option>
                                    <option value="residential">COMMERCIAL</option>
                                </select>
                                {err && property_use === "" ? <span>Property use Required</span> : null}
                            </div>


                            <div className="admin-form-group">
                                <label htmlFor="">Payment Plan</label>
                                <select value={payment_plan} onChange={(e) => setPaymentPlan(e.target.value)}>
                                    <option value="">Select Payment Plan</option>
                                    <option value="PER_ANNUM">PER_ANNUM</option>
                                    <option value="MONTHLY">MONTHLY</option>
                                    <option value="PER_PLOT">PER_PLOT</option>
                                    <option value="PER_DAY">PER_DAY</option>
                                </select>
                                {err && payment_plan === "" ? <span>Payment Plan Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Type</label>
                                <select value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="">Select Type</option>
                                    <option value="RENT">RENT</option>
                                    <option value="LEASE">LEASE</option>
                                    <option value="SALES">SALES</option>
                                </select>
                                {err && type === "" ? <span>Type Required</span> : null}
                            </div>


                            <div className="admin-form-group">
                                <label htmlFor="">Bed Room</label>
                                <input type="number" value={bedroom} onChange={(e) => setBedroom(e.target.value)} />
                                {err && bedroom === "" ? <span>Bed Room Required</span> : null}
                            </div>


                            <div className="admin-form-group">
                                <label htmlFor="">Bathroom</label>
                                <input type="number" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
                                {err && bathroom === "" ? <span>Bathroom Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Toilet</label>
                                <input type="number" value={toilet} onChange={(e) => setToilet(e.target.value)} />
                                {err && toilet === "" ? <span>Toilet Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Packing Space</label>
                                <select value={parking_space} onChange={(e) => setParkingSpace(e.target.value)}>
                                    <option value="">Select Parking Space</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                {err && parking_space === "" ? <span>Parking Space Required</span> : null}
                            </div>
                            <div className="admin-form-group">
                                <label htmlFor="">Type</label>
                                <select value={furnishing} onChange={(e) => setFurnishing(e.target.value)}>
                                    <option value="">Property Status</option>
                                    <option value="FURNISHING">FURNISHED</option>
                                    <option value="UNFURNISHED">UNFURNISHED</option>
                                </select>
                                {err && type === "" ? <span>Type Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Description</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                {err && description === "" ? <span>Description Required</span> : null}
                            </div>
                            <div className="admin-form-group">
                                <label htmlFor="">Disclaimer</label>
                                <textarea value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)}></textarea>
                                {err && disclaimer === "" ? <span>Disclaimer Required</span> : null}
                            </div>
                            <div className="admin-form-group">
                                <label htmlFor="">Amenities</label>
                                <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                                {err && amenities === "" ? <span>Amenities Required</span> : null}
                            </div>
                        </div>
                        <button>Update Property</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateProduct;