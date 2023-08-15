import './HomePage.css'
import { IoCall, IoLocationOutline } from "react-icons/io5";
import bg from "./image/bg.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import image1 from "./image/image1.jpg"
import img2 from "./image/img2.jpg"
import a1 from "./image/a1.jpg"
import a2 from "./image/a2.jpg"
import a3 from "./image/a3.jpg"
import a4 from "./image/a4.jpg"
import a5 from "./image/a5.jpg"
import a6 from "./image/a6.jpg"
import rent from "./image/rent.png"
import dual1 from "./image/dual1.jpg"
import dual2 from "./image/dual2.jpg"
import agent from "./image/agent.jpg"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const [verified, setVerified] = useState();
    // const Navigate = useNavigate();

    let getToken = localStorage.getItem('merchantToken');
    // console.log(getToken)

    useEffect(() => {
        fetch("http://property.reworkstaging.name.ng/v1/properties?merchant=64bd8c6cec5946cdadd37736&verified=true&limit=5", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((resp) => resp.json())
            .then((output) => {
                setVerified(output.data);
                console.log(output.data);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    var settings = {
        fade: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var selection = {
        speed: 500,
        infinite: true,
        // autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        // pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <div>
                <Slider {...settings} className='banner-carousel-container'>
                    <div className='banner-carousel1'>
                        <ul className='nav'>
                            <li><IoCall className='call-icon' /> CALL +234 906 3438 923</li>
                            <Link to="/" className='nav-link'><li>HOME</li></Link>
                            <li>WORK</li>
                            <Link to="/Shop" className='nav-link'>
                                <li>PROPERTY</li>
                            </Link>
                            <li><img src={bg} alt="logo" /></li>
                            <Link className='nav-link'><li>AGENT PROFILE</li></Link>
                            <Link className='nav-link'><li>USER PROFILE</li></Link>
                            <li><button>REGISTER</button></li>
                        </ul>
                        <h1>Q1 DISTRICT</h1>
                        <p>NEXT LEVEL OF LEAVING</p>

                    </div>
                    <div className='banner-carousel2'>
                        <ul className='nav'>
                            <li><IoCall className='call-icon' /> CALL +234 906 3438 923</li>
                            <li>HOME</li>
                            <li>PAGES</li>
                            <Link to="/Shop" className='nav-link'>
                                <li>PROPERTY</li>
                            </Link>
                            <li><img src={bg} alt="logo" /></li>
                            <li>APARTMENTS</li>
                            <li>BLOG</li>
                            <li><button>REGISTER</button></li>
                        </ul>
                        <h1>PANORAMIC</h1>
                        <p>NEXT LEVEL OF LEAVING</p>

                    </div>
                    <div className='banner-carousel3'>
                        <ul className='nav'>
                            <li><IoCall className='call-icon' /> CALL +234 906 3438 923</li>
                            <li>HOME</li>
                            <li>PAGES</li>
                            <Link to="/Shop" className='nav-link'>
                                <li>PROPERTY</li>
                            </Link>
                            <li><img src={bg} alt="logo" /></li>
                            <li>APARTMENTS</li>
                            <li>BLOG</li>
                            <li><button>REGISTER</button></li>
                        </ul>
                        <h1>PARK VIEW</h1>
                        <p>NEXT LEVEL OF LEAVING</p>

                    </div>
                </Slider>
                <div className='modern-space-container'>
                    <div className='modern-space'>
                        <div className='modern-space-section1'>
                            <h2>MODERN SPACES AND PREMIUM APARTMENT COMPLEXES. WELCOME TO NEW HOME RESIDENCE SHOWCASE.</h2>
                        </div>
                        <div className='modern-space-section2'>
                            <div className='modern-space-img1'>
                                <img src={image1} alt="image1" />
                            </div>
                            <div className='modern-space-img2'>
                                <img src={img2} alt="img2" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='selection-container'>
                    <div className='selection-carousel-container'>
                        <div className='select1'>
                            <p className='bestoffer'>BEST OFFERS</p>
                            <h1 className='find-home'>FIND A HOME THAT SUITS <br />YOUR LIFESTYLE</h1>
                            <p className='middle-line'>_____________________________________________________________________________________________________________________________________________________</p><br />
                        </div>
                        <div className='slider'>
                            <Slider {...selection} className='carousel-row-container' >
                                {
                                    verified && verified.map((item) => (
                                        <div className="carousel-row-1">
                                            <div className="image">
                                                <img src={item.image} alt="a1" />
                                            </div>
                                            <div className='lorm'>
                                                <p><IoLocationOutline />{item.name} - {item.city}</p>
                                                <h2>₦{item.price}</h2>
                                                <h2>{item.category}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <p className='middle-line'>_____________________________________________________________________________________________________________________________________________________</p><br /><br /><br />
                    </div>
                </div>
                <div className='rental'>
                    <div className='rental-most'>
                        <h1>The Most Rental Listings</h1>
                        <h3>Choose from over 1 million apartments, houses, condos, and townhomes for rent.</h3>
                    </div>

                    <div className='renting-made-simple'>
                        <div className='rent-text-side1'>
                            <h1>Renting Made Simple</h1>
                            <p>Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p><br /><br />
                            <a href="#">Find Out More</a>
                        </div>
                        <div className='rent-image'>
                            <img src={rent} alt="rent" />
                        </div>
                    </div>
                </div>
                <div className='discover-new-leaving-container'>
                    <div>
                        <h1 className='discover-new-way'>DISCOVER A NEW WAY OF LIVING <br /> & ENJOYING YOUR HOME</h1><br /><br />
                        <h3 className='discover-new-leaving'>WHAT MATERIAL ARE USED?</h3><br />
                        <h3 className='discover-new-leaving'>HOW TO BUY?</h3><br />
                        <h3 className='discover-new-leaving'>DO YOU OFFER INTERNAL-FREE PLAN?</h3><br />
                    </div>
                    <div>
                        <img src={dual1} alt="dual1" className='dual1' />
                        <div className='dual2'>
                            <img src={dual2} alt="dual2" />
                        </div>
                    </div>
                </div>
                <div className='image-section'>
                    {verified && verified.map((item) => (
                        <Link to={`/Shop/${item.id}`}>
                            <img src={item.image} alt="a5" />
                        </Link>
                    ))
                    }
                </div>
                <div className='contactUS'>
                    <div className='contact-us-container'><br /><br /><br /><br /><br /><br />
                        {/* <p className='bestoffer'>Send Us a Message</p> */}
                        <h1 className='find-home'>Send Us a Message</h1><br /><br /><br />
                        <input type="text" placeholder='Your Name' className='contact-us-input' /><br /><br />
                        <input type="text" placeholder='Your Email' className='contact-us-input' /><br /><br />
                        <textarea className='contact-us-textarea'>Messsage</textarea><br /><br />
                        <button>Send Message</button>
                    </div>
                    <div><br /><br /><br /><br /><br /><br />
                        <h1 className='find-home'>Contact Us</h1><br /><br /><br />
                        {/* <h1 className='find-home'></h1> */}
                        <div className='contact-us-colum2'>
                            <ul>
                                <h2 className='find-home'>Main office</h2><br />
                                <li>290 5th Ave, NY 10001, USA</li>
                                <li>+111 223 446 67</li>
                                <li>+123 456 789 11</li>
                                <li>newhome@example.com</li><br /><br /><br />
                                <li>Monday – Friday 09:00 – 20:30</li>
                                <li>Saturday 09:00 – 18:00</li>
                            </ul>

                            <ul>
                                <h2 className='find-home'>Second office</h2><br />
                                <li>42 W 33rd St, NY 10001, USA</li>
                                <li>+222 333 444 56</li>
                                <li>+123 456 789 11</li>
                                <li>newhome@example.com</li><br /><br /><br />
                                <li>Monday – Friday 09:00 – 20:30</li>
                                <li>Saturday 09:00 – 18:00</li>
                            </ul>

                        </div>

                    </div>
                </div>


                <div className='become-agent-section-container'>
                    <p className='middle-line'>________________________________________________________________________________________________________________________________________________________________________</p><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='become-agent-section-container-'>
                        <div className='become-agent-section1'>
                            <div className='become-agent-inner-div'>
                                <h1>Sign to newsletter</h1>
                                <p>Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>
                                <input type="text" placeholder='Your Email' /><button>SignIn</button>
                            </div>


                        </div>


                        <div className='become-agent-section2'>
                            <div className='become-agent-inner-div'>
                                <h1>Become a Real Estate Agent</h1>
                                <p>Pri adhuc electram elaboraret at, et mei delicata iracundia adolescens, at ius dico eius his solum convenire ei nam.</p>
                                <button>Join our Team</button>
                            </div>
                        </div>
                    </div>

                </div>


















            </div>

        </div>
    );
}

export default HomePage;