import { useEffect, useState } from 'react';
import './profile.css'
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Profile() {
    const [user, setUser] = useState({})
    let getUser = localStorage.getItem("user_id")
    let userToken = localStorage.getItem("userToken")
    useEffect(() => {
        fetch(`http://property.reworkstaging.name.ng/v1/users/${getUser}`, {
            headers: { "authorization": `Bearer ${userToken}` }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setUser(data)
            })
    }, [])
    return (
        <div>

            <section id="side">

                <div className="sides">
                    <Link to="/profile" className="link"><button>Profile</button></Link>
                    <Link to="/wishlist" className="link"><button>Wishlist</button></Link>
                    <Link className="link"><button className='button' >log out</button></Link>
                </div>
            </section>

            <div className="profile">
                        <div className="main-profile">
                            <div className="profile-icon">
                                <h3><IoPersonCircleSharp /></h3>
                            </div>
                            <p className="role">User_Name : {user.first_name} {user.last_name} </p>
                            <p className="role">User_Email : {user.email} </p>
                            <p className="role">User_Phone : {user.phone} </p>
                        </div>
            </div>
        </div>
    )
}

export default Profile;