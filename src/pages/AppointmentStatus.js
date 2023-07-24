import Navigation from '../components/Navigation';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";
import './AppointmentStatus.css'
function AppointmentStatus(){
    return(
        <div>
            <Navigation/><br /><br /><br /><br /><br /><br />
            <h1>
                Appointment Status
            </h1>
            <div>
            <table>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Rent/Buy</th>
                            <th>Price</th>
                            <th>Name of Property</th>
                            <th>Property Location</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>

                            <tr >
                                <td>Oluwasegun Dambola</td>
                                <td>segee@gmail.com</td>
                                <td>09027003958</td>
                                <td>Buy</td>
                                <td>$5500</td>
                                <td>Flat</td>
                                <td>SunCity Estate</td>
                                <td>8:00am</td>
                                <td>25/7/2023</td>
                                <td><IoCheckmarkCircleSharp className='table-icon' /></td>
                                <td><IoCloseCircleSharp className='table-icon'/></td>
                               
                            </tr>
                     
                    </table>

            </div>


        </div>
    );
}

export default AppointmentStatus;