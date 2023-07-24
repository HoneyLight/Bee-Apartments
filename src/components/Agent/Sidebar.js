import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div>
                 <section id="menu">
                 <div class="logo">
                    <h2>AGENT VIEW</h2>
                </div>
                <div className="items">
                    <Link to="/Login2" className="link"><button>Login</button></Link>
                    <Link to="/Createpro" className="link"><button>Create property</button></Link>
                    <Link to="/Viewpro" className="link"><button>View property</button></Link>
                    <Link to="/Editpro" className="link"><button>Edit property</button></Link>
                    <Link to="/Appointment" className="link"><button>View Appointment</button></Link>
                    <Link className="link"><button>View property Reviews</button></Link>
                    <Link  className="link"><button>Property Status</button></Link>
                    <Link  className="link"><button>View wishlist</button></Link>
                </div>
             </section>   

        </div>
    )
}
export default Sidebar;