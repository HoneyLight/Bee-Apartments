import "./Admin.css";
import AdminNavigation from "./AdminNavigation";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

function AdminCreateProduct() {
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
    const [toilet, setToilet] = useState("");
    const [parking_space, setParkingSpace] = useState("");
    const [furnish, setFurnish] = useState("");
    const [disclaimer, setDisclaimer] = useState("");
    const [amenities_bedroom, setAmenitiesBedroom] = useState("");
    const [amenities_toilet, setAmenitiesToilet] = useState("");
    const [amenities_gym, setAmenitiesGym] = useState("");
    const [amenities_wifi, setAmenitiesWifi] = useState("");
    const [amenities_water, setAmenitiesWater] = useState("");
    const [amenities_AirCondition, setAmenitiesaircondition] = useState("");
    const [amenities_floor, setAmenitiesfloor] = useState("");
    const [amenities_fence, setAmenitiesfence] = useState("");
    const [amenities_garge, setAmenitiesgarge] = useState("");
    const [amenities_elevator, setAmenitieselevator] = useState("");
    const [amenities_renovation, setAmenitiesrenovation] = useState("");
    const [amenities_security, setAmenitiessecurity] = useState("");
    const [amenities_heating, setAmenitiesheating] = useState("");
    const [err, setErr] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (name === "" || price === "" || country === "" || state === "" || city === "" || lat === "" || lng === "" || address === "" || description === "" || total_area === "" || property_use === "" || payment_plan === "" || type === "" || bedroom === "" || bathroom === "" || toilet === "" || parking_space === "" || furnish === "" || disclaimer === "" || amenities_bedroom === "" || amenities_toilet === "" || amenities_gym === "" || amenities_wifi === "" || amenities_water === "" || amenities_AirCondition === "" || amenities_floor === "" || amenities_fence === "" || amenities_garge === "" || amenities_elevator === "" || amenities_renovation === "" || amenities_security === "" || amenities_heating === "" ) {
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
            total_area:total_area,
            property_use:property_use,
            payment_plan:payment_plan,
            type:type,
            bedroom:bedroom,
            bathroom:bathroom,
            toilet:toilet,
            parking_space:parking_space,
            furnish:furnish,
            disclaimer:disclaimer,
            amenities_bedroom:amenities_bedroom,
            amenities_toilet:amenities_toilet,
            amenities_gym:amenities_gym,
            amenities_wifi:amenities_wifi,
            amenities_water:amenities_water,
           
            // quantity: quantity,
            date: new Date().toLocaleString(),
        };
        // fetch("http://159.65.21.42:9000/create/product", {
        //     method: "POST",
        //     headers: { "Content-Type": "Application/json" },
        //     body: JSON.stringify(product),
        // })
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         alert("Product Created");
        //         console.log(data);
        //     })
        //     .catch((err) => console.log(err));
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
                                    <option value="flat">Flat</option>
                                    <option value="studioapartment">Studio Apartment</option>
                                    <option value="duplexapartment">Duplex Apartment</option>
                                    <option value="basementapartment">Basement Apartment</option>
                                    <option value="triplex apartment">Triplex Apartment</option>
                                    <option value="Luxuryapartment">Luxury Apartment</option>
                                    <option value="floorthrough">Floor Through</option>
                                    <option value="penhouseapartment">Penhouse Apartment</option>
                                </select>
                                {err && category === "" ? <span>Category Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Total Area</label>
                                <input type="number" value={total_area} onChange={(e) => setTotalarea(e.target.value)} />
                                {err && total_area === "" ? <span>Total Area Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Property use</label>
                                <select value={property_use} onChange={(e) => setPropertyUse(e.target.value)}>
                                    <option value="">Select Property Use</option>
                                    <option value="business">Business</option>
                                    <option value="residential">Residential</option>
                                </select>
                                {err && property_use === "" ? <span>Property use Required</span> : null}
                            </div>


                            <div className="admin-form-group">
                                <label htmlFor="">Payment Plan</label>
                                <select value={payment_plan} onChange={(e) => setPaymentPlan(e.target.value)}>
                                    <option value="">Select Payment Plan</option>
                                    <option value="per_month">Per_Month</option>
                                    <option value="per_annum">per_Annum</option>
                                </select>
                                {err && payment_plan === "" ? <span>Payment Plan Required</span> : null}
                            </div>

                            <div className="admin-form-group">
                                <label htmlFor="">Type</label>
                                <select value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="">Select Type</option>
                                    <option value="sell">Sell</option>
                                    <option value="buy">Buy</option>
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
                                <label htmlFor="">Description</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                {err && description === "" ? <span>Description Required</span> : null}
                            </div>
                            </div>


                            <div className="Amenities">
                                    <div className="Container">
                                        <div className="col">
                                            <div>
                                                <input type="checkbox" />
                                                <p>Air Condition</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Floor</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Heating</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Renovation</p>
                                            </div>
                                           
                                        </div>
                                        <div className="col">
                                            <div>
                                                <input type="checkbox" />
                                                <p>Cable TV</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Elevator</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Furnishing</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Intercom</p>
                                            </div>
                                            
                                        </div>
                                        <div className="col">
                        
                                            <div>
                                                <input type="checkbox" />
                                                <p>Fence</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Garage</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Parking</p>
                                            </div>
                                            <div>
                                                <input type="checkbox" />
                                                <p>Swimming Pool</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                    
                                            <div>
                                                <input type="checkbox" />
                                                <p>Garden</p>
                                            </div>
                                        
                                            <div>
                                                <input type="checkbox" />
                                                <p>WiFi</p>
                                            </div>

                                            <div>
                                                <input type="checkbox" />
                                                <p>Security</p>
                                            </div>
                                        </div>
                                    </div>
                            
                                    
                            <button>Create Property</button>
                                </div>
                       
                    </form>



                </div>
            </div>
        </div>
    )
}

export default AdminCreateProduct;