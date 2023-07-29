
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import "./Single.css";
import { useParams } from "react-router-dom";


function Property() {
const {id} = useParams();
const [property, setProperty] = useState([]);

let getToken = localStorage.getItem("merchantToken")

const getProperty = () => {
    fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", "authorization": `Bearer ${getToken}`},
    })
    .then((resp) => resp.json())
    .then((data) => {
        setProperty(data);
        console.log(data);
    })
};

useEffect(() => {
    getProperty();
}, []);

    return (
        <div>
            <Navigation />
            <div className="container-single-page">
                <div className="SinglePage">
                    <div className="col">
                        <img src={property.image} alt="" />
                    </div>
                    <div className="col">
                        <div>
                            <img src={property.image} alt="" />
                        </div>
                        <div>
                            <img src={property.image} alt="" />
                        </div>
                        <div>
                            <img src={property.image} alt="" />
                        </div>
                        <div>
                            <img src={property.image} alt="" />
                            {/* <button>see all photos</button> */}
                        </div>
                    </div>
                </div>

                <div className="property-bg">
                    <div className="property-left">
                        <div className="property-desc">
                            <h2>Description</h2><br />
                            <p>{property.description}</p>
                        </div>
                        <div className="prop-features">
                            <h2>Property features</h2><br />
                            <h3>{property.name}</h3>
                            <h4>{property.category}</h4>
                            <p>{property.city}</p>
                            <p>{property.country}</p>
                            <p>{property.price}</p>
                        </div>
                        <div className="prop-details">
                            <h4>Property details</h4>
                            <div className="prop-details-inner">
                                <div className="prop-details-left">
                                    <div>
                                        <p>Size:</p>
                                        <p>Bedrooms:</p>
                                        <p>Bathromms:</p>
                                        <p>Latitude:</p>
                                        <p>Longitude:</p>
                                    </div>
                                    <div>
                                        <p>{property.total_area}</p>
                                        <p>{property.bedroom}</p>
                                        <p>{property.bathroom}</p>
                                        <p>{property.lat}</p>
                                        <p>{property.lng}</p>
                                    </div>
                                </div>
                                <div className="prop-details-right">
                                    <div>
                                        <p>Furnishing:</p>
                                        <p>Amenities:</p>
                                        <p>Property Use:</p>
                                        <p>Property Type:</p>
                                    </div>
                                    <div>
                                        <p>{property.furnishing}</p>
                                        <p>{property.amenities}</p>
                                        <p>{property.property_use}</p>
                                        <p>{property.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />
                        <div className="prop-details">
                            <h4>Property utility</h4>
                            <div className="prop-details-inner">
                                <div className="prop-details-left">
                                    <div>
                                        <p>Heating:</p>
                                        <p>Air condition:</p>
                                        <p>Fireplace:</p>
                                        <p>Elevator:</p>
                                        <p>Ventilation:</p>
                                    </div>
                                    <div>
                                        <p>Natural gas</p>
                                        <p>Yes</p>
                                        <p>-</p>
                                        <p>-</p>
                                        <p>Yes</p>
                                    </div>
                                </div>
                                <div className="prop-details-right">
                                    <div>
                                        <p>Intercom:</p>
                                        <p>Window Type:</p>
                                        <p>Cable TV:</p>
                                        <p>WiFi:</p>
                                    </div>
                                    <div>
                                        <p>Yes</p>
                                        <p>Aluminium frame</p>
                                        <p>Yes</p>
                                        <p>Yes</p>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />
                        <div className="prop-details">
                            <h4>Outdoor Features</h4>
                            <div className="prop-details-inner">
                                <div className="prop-details-left">
                                    <div>
                                        <p>Garage:</p>
                                        <p>Disabled Access:</p>
                                        <p>Fence:</p>
                                        <p>Pet Friendly:</p>
                                    </div>
                                    <div>
                                        <p>Yes</p>
                                        <p>Ramp</p>
                                        <p>Wood Fence</p>
                                        <p>Yes</p>
                                    </div>
                                </div>
                                <div className="prop-details-right">
                                    <div>
                                        <p>Furnishing:</p>
                                        <p>Ceiling Height:</p>
                                        <p>Construction Year:</p>
                                        <p>Renovation:</p>
                                    </div>
                                    <div>
                                        <p>Furnished</p>
                                        <p>3m</p>
                                        <p>2007</p>
                                        <p>2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-right">
                        <div className="agent">
                            <div className="agent-details">
                                <p>NEW HOME</p>
                                <h3>Jahnedu Ibekwelu</h3>
                                <p>25 Columbia Heights, Brooklyn, New York</p>

                            </div>
                            <div className="agent-numbers">
                                <div>
                                    <p>Office Phone</p>
                                    <p>Mobile Phone</p>
                                    <p>WhatsApp</p>
                                    <p>Email</p>
                                </div>
                                <div>
                                    <p>+234810937263</p>
                                    <p>+234810937263</p>
                                    <p>+234810937263</p>
                                    <p>someone@gmail.com</p>
                                </div>
                            </div>
                            <button>View my properties</button>
                        </div>
                        <div className="schedule-tour">
                            <div className="schedule-details">
                                <h3>Schedule tour</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure maxime pariatur quisquam animi eos facilis dolorem, vitae quod error iste nemo sunt illo nihil dolores. Aperiam omnis ea quidem!</p>
                                <form action="" className="enquiry-form">
                                    <div>
                                        <input type="text" placeholder="Full name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Email Address" />
                                    </div>

                                    <div>
                                        <input type="phone number" placeholder="Phone Number" />
                                    </div>

                                    <div>
                                        <input type="text" placeholder="Name of Property" />
                                    </div>

                                    <div>
                                        <select name="" id="">
                                            <option value="">Select Time</option>
                                            <option value="">8:00am</option>
                                            <option value="">10:00am</option>
                                            <option value="">11:00am</option>
                                            <option value="">1:00pm</option>
                                            <option value="">2:00pm</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <select name="" id="">
                                            <option value="">Select Location</option>
                                            <option value=""></option>
                                            <option value="">10:00am</option>
                                            <option value="">11:00am</option>
                                            <option value="">1:00pm</option>
                                            <option value="">2:00pm</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select name="" id="">
                                            <option value="">Select Rent/Buy</option>
                                            <option value="">Rent</option>
                                            <option value="">Buy</option>
                                        </select>
                                    </div>

                                    <div>
                                        <textarea name="" placeholder="Message" cols="30" rows="5"></textarea>
                                    </div>
                                    <button>Make Enquiry</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div><br /><br />
            <Footer />
        </div>
    );
}
export default Property;