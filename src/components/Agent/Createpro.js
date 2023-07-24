import { useState } from "react";
import Sidebar from "./Sidebar";

function Createpro() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [total_area, setTotal_area] = useState('')
  const [property_use, setProperty_use] = useState('')
  const [payment_plan, setPayment_plan] = useState('')
  const [type, setType] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [toilet, setToilet] = useState('')
  const [parking_space, setParking_space] = useState('')
  const [furnishing, setFurnishing] = useState('')
  const [disclaimer, setDisclaimer] = useState('')
  const [amenities, setAmenities] = useState('')
  const [err, SetErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || price === "" || country === "" || state === "" || city === "" || lat === "" || lng === "" || address === "" || description === "" || category === "" || total_area === "" || property_use === "" || payment_plan === "" || type === "" || bedroom === "" || bathroom === "" || toilet === "" || parking_space === "" || furnishing === "" || disclaimer === "" || amenities === "") {
      SetErr(true)
      return
    }
    let agentProperty = {
      name: name,
      price: price,
      country: country,
      state: state,
      city: city,
      lat: lat,
      lng: lng,
      address: address,
      description: description,
      category: category,
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
    }

    let getToken = localStorage.getItem("agentToken");

    fetch("http://property.reworkstaging.name.ng/v1/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": `Bearer ${getToken}` },
      body: JSON.stringify(agentProperty),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        alert("Property created successfully");
      }).catch((err) => (err.message));
  };
  return (
    <div>
      <div className="page">
        <Sidebar />
        <form className="forms" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} />
                   {err && name === "" ? <span>Name Required</span> : null}
               </div>
  
                 <div className="form-group">
                   <input type="text" placeholder="Price*" value={price} onChange={(e) => setPrice(e.target.value)} />
                   {err && price === "" ? <span>Price Required</span> : null}
               </div>
  
               <div className="form-group">
                  <input type="text" placeholder="Country*" value={country} onChange={(e) => setCountry(e.target.value)} />
                  {err && country === "" ? <span>Country Required</span> : null}
               </div>
  
               <div className="form-group">
                 <input type="text" placeholder="State*" value={state} onChange={(e) => setState(e.target.value)} />
                 {err && state === "" ? <span>State Required</span> : null}
               </div>
  
               <div className="form-group">
                 <input type="text" placeholder="City*" value={city} onChange={(e) => setCity(e.target.value)} />
                 {err && city === "" ? <span>City Required</span> : null}
               </div>
  
               <div className="form-group">
                 <input type="text" placeholder="Latitude*" value={lat} onChange={(e) => setLat(e.target.value)} />
            {err && lat === "" ? <span>Latitude Required</span> : null}
               </div>
  
               <div className="form-group">
                  <input type="text" placeholder="Longitude*" value={lng} onChange={(e) => setLng(e.target.value)} />
                  {err && lng === "" ? <span>Longtitude Required</span> : null}
                </div>
  
                <div className="form-group">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Address*" value={address} onChange={(e) => setAddress(e.target.value)} />
                 {err && address === "" ? <span>Address Required</span> : null}
               </div>
  
               <div className="form-group">
                 <select value={category} onChange={(e) => setCategory(e.target.value)}>
                   <option value="">Select Category</option>
                   <option value="FLAT">FLAT</option>
                   <option value="APPARTMENT">APPARTMENT</option>
                   <option value="LAND">LAND</option>
                   <option value="DUPLEX">DUPLEX</option>
                   <option value="WAREHOUSE">WAREHOUSE</option>
                   <option value="SHOP">SHOP</option>
                 </select>
                 {err && category === "" ? <span>Category Required</span> : null}
               </div>
               <div className="form-group">
                 <input type="text" placeholder="Total Area*" value={total_area} onChange={(e) => setTotal_area(e.target.value)} />
                 {err && total_area === "" ? <span>Total Area Required</span> : null}
               </div>
  
                <div className="form-group">
                   <select value={property_use} onChange={(e) => setProperty_use(e.target.value)}>
                     <option value="">Select Property Use</option>
                     <option value="RESIDENTIAL">RESIDENTIAL</option>
                     <option value="COMMERCIAL">COMMERCIAL</option>
                   </select>
                   {err && property_use === "" ? <span>Property use Required</span> : null}
                 </div>
  
                 <div className="form-group">
                   <select value={payment_plan} onChange={(e) => setPayment_plan(e.target.value)}>
                     <option value="">Select Payment Plan</option>
                     <option value="PER_ANNUM">PER_ANNUM</option>
                     <option value="MONTHLY">MONTHLY</option>
                     <option value="PER_PLOT">PER_PLOT</option>
                     <option value="PER_DAY">PER_DAY</option>
                   </select>
                   {err && payment_plan === "" ? <span>Payment Plan Required</span> : null}
                 </div>
  
                 <div className="form-group">
                   <select value={type} onChange={(e) => setType(e.target.value)}>
                     <option value="">Type</option>
                     <option value="RENT">RENT</option>
                     <option value="LEASE">LEASE</option>
                     <option value="SALES">SALES</option>
                   </select>
                 {err && type === "" ? <span>Type Required</span> : null}
               </div>
  
  
               <div className="form-group">
                 <input type="number" placeholder="Bedroom*" value={bedroom} onChange={(e) => setBedroom(e.target.value)} />
                  {err && bedroom === "" ? <span>Bed Room Required</span> : null}
               </div>
  
  
               <div className="form-group">
                 <input type="number" placeholder="Bathroom*" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
                 {err && bathroom === "" ? <span>Bathroom Required</span> : null}
               </div>
  
               <div className="form-group">
                 <input type="number" placeholder="Toilet*" value={toilet} onChange={(e) => setToilet(e.target.value)} />
                 {err && toilet === "" ? <span>Toilet Required</span> : null}
               </div>
  
               <div className="form-group">
                 <select value={parking_space} onChange={(e) => setParking_space(e.target.value)}>
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
               <div className="form-group">
                 <select value={furnishing} onChange={(e) => setFurnishing(e.target.value)}>
                    <option value="">Property Status</option>
                   <option value="FURNISHED">FURNISHED</option>
                    <option value="UNFURNISHED">UNFURNISHED</option>
                   </select>
                   {err && furnishing === "" ? <span>Status Required</span> : null}
                 </div>
  
  
                 <div className="form-group">
                   <textarea value={description} placeholder="Description*" onChange={(e) => setDescription(e.target.value)}></textarea>
                   {err && description === "" ? <span>Description Required</span> : null}
                 </div>
                 <div className="form-group">
                   <textarea value={disclaimer} placeholder="Disclaimer*" onChange={(e) => setDisclaimer(e.target.value)}></textarea>
           {err && disclaimer === "" ? <span>Disclaimer Required</span> : null}
                 </div>
                 <div className="form-group">
                   <input type="text" placeholder="Amenities*" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                   {err && amenities === "" ? <span>Amenities Required</span> : null}
                 </div>
                 <button>Create Property</button>
        </form>
      </div>
    </div>
  )
}

export default Createpro;


// <form className="forms" onSubmit={handleSubmit}>
//     <div classname="form-group">
//       <label>Name</label>
//       <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
//       {err === true && name === "" ? <span>Name required</span> : name === null}
//     </div>
//     <div classname="form-group">
//       <label>Price</label>
//       <input type="text" onChange={(e) => setprice(e.target.value)} value={price} />
//       {err === true && price === "" ? <span>Price required</span> : price === null}

//     </div>
//     <div classname="form-group">
//       <label>Country</label>
//       <input type="text" onChange={(e) => setcountry(e.target.value)} value={country} />
//       {err === true && country === "" ? <span>Country required</span> : country === null}

//     </div>
//     <div classname="form-group">
//       <label>State</label>
//       <input type="text" onChange={(e) => setstate(e.target.value)} value={state} />
//       {err === true && state === "" ? <span>State required</span> : state === null}

//     </div>

//     <div classname="form-group">
//       <label>City</label>
//       <input type="text" onChange={(e) => setcity(e.target.value)} value={city} />
//       {err === true && city === "" ? <span>City required</span> : city === null}
//     </div>
//     <div classname="form-group">
//       <label>Latitude</label>
//       <input type="number" onChange={(e) => setlat(e.target.value)} value={lat} />
//       {err === true && lat === "" ? <span>Latitude required</span> : lat === null}

//     </div>
//     <div classname="form-group">
//       <label>Longitude</label>
//       <input type="number" onChange={(e) => setlng(e.target.value)} value={lng} />
//       {err === true && lng === "" ? <span>Longitude required</span> : lng === null}

//     </div>
//     <div classname="form-group">
//       <label>Address</label>
//       <input type="text" onChange={(e) => setaddress(e.target.value)} value={address} />
//       {err === true && address === "" ? <span>Address required</span> : address === null}

//     </div>

//     <div classname="form-group">
//       <label>Description</label>
//       <input type="text" onChange={(e) => setdescription(e.target.value)} value={description} />
//       {err === true && description === "" ? <span>Description required</span> : description === null}
//     </div>
//     <div classname="form-group">
//       <label>Category</label>
//       <select onChange={(e) => setcategory(e.target.value)} value={category} >
//         <option value="">Select</option>
//         <option value="FLAT">FLAT</option>
//         <option value="APPARTMENT">APPARTMENT</option>
//         <option value="LAND">LAND</option>
//         <option value="DUPLEX">DUPLEX</option>
//         <option value="WAREHOUSE">WAREHOUSE</option>
//         <option value="SHOP">SHOP</option>
//       </select>
//       {err === true && category === "" ? <span>Category required</span> : category === null}

//     </div>
//     <div classname="form-group">
//       <label>Total_area</label>
//       <input type="text" onChange={(e) => settotal_area(e.target.value)} value={total_area} />
//       {err === true && total_area === "" ? <span>Total_area required</span> : total_area === null}

//     </div>
//     <div classname="form-group">
//       <label>Property use</label>
//       <select onChange={(e) => setproperty_use(e.target.value)} value={property_use}>
//         <option value=""></option>
//         <option value="RESIDENTIAL">RESIDENTIAL</option>
//         <option value="COMMERCIAL">COMMERCIAL</option>
//       </select>
//       {err === true && property_use === "" ? <span>Property use required</span> : property_use === null}

//     </div>

//     <div classname="form-group">
//       <label>payment_plan</label>
//       <select onChange={(e) => setpayment_plan(e.target.value)} value={payment_plan} >
//         <option value="">Select</option>
//         <option value="PER_ANNUM">PER_ANNUM</option>
//         <option value="MONTHLY">MONTHLY</option>
//         <option value="PER_PLOT">PER_PLOT</option>
//         <option value="PER_DAY">PER_DAY</option>
//       </select>
//       {err === true && payment_plan === "" ? <span>payment_plan required</span> : payment_plan === null}
//     </div>
//     <div classname="form-group">
//       <label>Type</label>
//       <select onChange={(e) => settype(e.target.value)} value={type}>
//         <option value="">Select</option>
//         <option value="RENT">RENT</option>
//         <option value="LEASE">LEASE</option>
//         <option value="SALES">SALES</option>
//       </select>
//       {err === true && type === "" ? <span>Type required</span> : type === null}

//     </div>
//     <div classname="form-group">
//       <label>Bedrooms</label>
//       <input type="number" onChange={(e) => setbedroom(e.target.value)} value={bedroom} />
//       {err === true && bedroom === "" ? <span>bedroom required</span> : bedroom === null}

//     </div>
//     <div classname="form-group">
//       <label>Bathrooms</label>
//       <input type="Number" onChange={(e) => setbathroom(e.target.value)} value={bathroom} />
//       {err === true && setbathroom === "" ? <span>Enter required</span> : setbathroom === null}

//     </div>

//     <div classname="form-group">
//       <label>Toilet</label>
//       <input type="Number" onChange={(e) => settoilet(e.target.value)} value={toilet} />
//       {err === true && toilet === "" ? <span>  Toilet required</span> : toilet === null}
//     </div>
//     <div classname="form-group">
//       <label>parking_space</label>
//       <input type="Number" onChange={(e) => setparking_space(e.target.value)} value={parking_space} />
//       {err === true && parking_space === "" ? <span>parking_space required</span> : parking_space === null}

//     </div>
//     <div classname="form-group">
//       <label>Furnishing</label>
//       <select onChange={(e) => setfurnishing(e.target.value)} value={furnishing}>
//         <option value="">Select</option>
//         <option value="FURNISHED">FURNISHED</option>
//         <option value="UNFURNISHED">UNFURNISHED</option>
//       </select>
//       {err === true && furnishing === "" ? <span>Furnishing required</span> : furnishing === null}

//     </div>


//     <div classname="form-group">
//       <label>Disclaimer</label>
//       <input type="text" onChange={(e) => setdisclaimer(e.target.value)} value={disclaimer} />
//       {err === true && disclaimer === "" ? <span>Disclaimer required</span> : disclaimer === null}

//     </div>

//     <div classname="form-group">
//       <label>Amenities</label>
//       <input type="text" onChange={(e) => setamenities(e.target.value)} value={amenities} />
//       {err === true && amenities === "" ? <span>amenities required</span> : amenities === null}

//     </div>
//   <button>Create Property</button>
// </form>







{/* <form className="forms" onSubmit={handleSubmit} >
  <h2>Create Property</h2>
  <div className="form-group">
    <input type="text" value={name} placeholder="Name*" onChange={(e) => setName(e.target.value)} />
    {err === true && name === "" ? <span>Name is Required</span> : null}
  </div>

  <div className="form-group">
    <input type="file" value={img} placeholder="Image*" onChange={(e) => setImg(e.target.value)} />
    {err === true && img === "" ? <span>Image  is Required</span> : null}
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
</form> */}