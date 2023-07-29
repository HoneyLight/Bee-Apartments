import './Navigation.css'
import { IoCall, IoLocationOutline, IoStarOutline } from "react-icons/io5";
import bg from "./image/bg.png"
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <div className="Navigation-container">
                <ul className='main-navigation'>                 
                    <li><img src={bg} alt="logo" /></li>
                    <li>HOME</li>
                    <li>PAGES</li>
                    <Link to="/Shop">
                        <li>PROPERTY</li>
                    </Link>              
                    <Link to='/AppointmentStatus'>
                    <li>APARTMENTS</li>
                    </Link>
                    <Link to="/wishlist"><li>WISHLIST<IoStarOutline />1</li></Link>
                    <li><IoCall className='call-icon' /> CALL +234 906 3438 923</li>
                   <Link to="/Signup">
                   <li><button>REGISTER</button></li>
                   </Link>
                </ul>
            </div>

        </div>
    )
}
export default Navigation;