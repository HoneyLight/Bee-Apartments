
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import "./Single.css";
import { useParams } from "react-router-dom";


function Property() {
    const [review, setReview] = useState();
    const [comments, setComments] = useState("");
    const { id } = useParams();
    const [property, setProperty] = useState([]);
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [timer1, setTimer1] = useState("");
    const [timer2, setTimer2] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState(false)

    let user_Id = localStorage.getItem("user_id");
    let userToken = localStorage.getItem("userToken")
    let getToken = localStorage.getItem("merchantToken")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(message === "" || date === "" || timer1 === "" || timer2 === "") {
            setErr(true);
            return;
        }
        let userBooking = {
            property_id: id,
            user_id: user_Id,
            date: date,
            msg: message,
            time: {
                from: timer1,
                to: timer2,
            },
    
        };
        console.log(userBooking)
        fetch(`http://property.reworkstaging.name.ng/v1/appointments`, {
            method: "POST",
            headers: {"Content-Type": "Application/json", "Authorization": `Bearer ${userToken}`},
            body: JSON.stringify(userBooking),
        }).then((resp) => resp.json())
        .then((data) => {
            alert("Appointment booked successfully")
            console.log(data);
        }).catch((err) => {
            console.log(err.message)
        })
    }
    




    const getProperty = () => {
        fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${getToken}` },

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

    let userId = localStorage.getItem("user_id")
    const postReview = (e) => {
        e.preventDefault()
        if (comments == "") {
            alert("Kindly leave a review");
            return;
        }

        let reviewDetails = {
            property_id: id,
            user_id: userId,
            text: comments
        }
        console.log(reviewDetails)

        let userToken = localStorage.getItem("userToken")

        fetch("http://property.reworkstaging.name.ng/v1/reviews", {
            method: "POST",
            headers: {
                "Content-type": "Application/Json",
                "authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify(reviewDetails)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setReview((preComment) => [...preComment, data.data])
            }).catch((err) => {
                console.log(err.message)
            })
        setComments("")

    };

    // REviews

    useEffect(() => {
        fetch(
            `http://property.reworkstaging.name.ng/v1/reviews?property_id=${id}&limit=10&page=0`,
            {
                headers: { authorization: `Bearer ${userToken}` },
            }
        )
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.data);
                setReview(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
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
                                <h3>{property.agent?.full_name}</h3>
                                <p>{property.agent?.company}</p>

                            </div>
                            <div className="agent-numbers">
                                <div>
                                    <p>Office Phone</p>
                                    <p>Mobile Phone</p>
                                    <p>WhatsApp</p>
                                    <p>Email</p>
                                </div>
                                <div>
                                <p>{property.agent?.primary_phone}</p>
                                    <p>{property.agent?.phones}</p>
                                    <p>{property.agent?.primary_phone}</p>
                                    <p>{property.agent?.email}</p>
                                </div>
                            </div>
                            <button>View my properties</button>
                        </div>
                        <div className="schedule-tour">
                            <div className="schedule-details">
                                <h3>Schedule Appointment</h3>
                                <p>Book an Appointment with us</p>
                                <form action="" className="enquiry-form" onSubmit={handleSubmit}>
                                             
                                   
                                    <div>
                                        <input type="date" placeholder="Select Date" onChange={(e)=> setDate(e.target.value)} value={date} />
                                        {err == true && date === "" ? <span>Date is required</span> : null}
                                    </div>
                                    <div>
                                        <textarea name="" placeholder="Message" cols="30" rows="5" onChange={(e)=> setMessage(e.target.value) } value={message}></textarea>
                                        {err == true & message === "" ? <span>Message required</span> : null}
                                    </div>
                                    <div>
                                        <input type="time" placeholder="Select Time" onChange={(e)=> setTimer1(e.target.value)} value={timer1}/>
                                        {err == true && timer1 === "" ? <span>kindly select a time</span> : null}
                                    </div>
                                    <div>
                                        <input type="time" placeholder="Select Time" onChange={(e)=> setTimer2(e.target.value)} value={timer2}/>
                                        {err == true && timer2 === "" ? <span>kindly select a time</span> : null}
                                    </div>
                         
                                    <button>Make Enquiry</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="reviews">
                    <div className="review-section">
                        <h2>Reviews</h2>
                        <form className="reviewform" onSubmit={postReview}>
                            <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="2"
                                onChange={(e) => setComments(e.target.value)}
                                value={comments}
                                placeholder="Leave a comment..."
                            >
                                {" "}
                            </textarea>
                            <button>Share Review</button>
                        </form>
                        {review &&
                            review.map((comment) => (
                                <div className="comments">
                                    <div className="editReview">
                                        <p style={{"color":"black"}}>{comment.text}</p>
                                        <div className="editanddelete">
                                            {/* <BiEditAlt/> */}
                                            {/* <RiDeleteBin4Line /> */}
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Property;