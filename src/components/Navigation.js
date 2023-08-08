import './Navigation.css'
import { IoCall, IoLocationOutline } from "react-icons/io5";
import bg from "./image/bg.png"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div>
            <div className="Navigation-container">
                <ul className='main-navigation'>
                 
                    <Link to="/"><li><img src={bg} alt="logo" /></li></Link>
                    <Link to="/"><li>HOME</li></Link>
                    <li>PAGES</li>
                    <Link to="/Shop" className='nav-link'>
                        <li>PROPERTY</li>
                    </Link>
                   
                    <Link to='/AppointmentStatus' className='nav-link'>
                    <li>APARTMENTS</li>
                    </Link>
                    <Link to="/profile"><li>profile</li></Link>
                    <li><IoCall className='call-icon' /> CALL +234 906 3438 923</li>
                   
                   <li onClick={() => setIsDropdownOpen(!isDropdownOpen)}><button>REGISTER</button>
                   {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <p className='middle-line'>_____________________</p><br />
                               <Link to="/Signup" className='dropdown-link'><p>User Register</p></Link><br />
                               <Link to="/Login" className='dropdown-link'><p>User Login</p></Link><br />
                               <Link to="/Signup" className='dropdown-link'><p>Agent Register</p></Link><br />
                               <Link to="/Signup" className='dropdown-link'><p>Agent Login</p></Link>
                            </div>
                    )}
                 </li>
                   
                </ul>

            </div>

        </div>
    )
}
export default Navigation;