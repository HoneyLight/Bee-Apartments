import './BookingStatus.css';

function BookingStatus() {
    return (
        <div>
            <div className="status">
                <div className="status-header">
                    <h2>Appointment Schedule</h2>
                </div>
                <div className="status-report">
                    <h3>Name: Deborah Inyang</h3>
                    <h4>Date: 20/07/2023</h4>
                    <h3>Agent: Dambola Jahnedu</h3>
                    <h4>Email: dambola@gmail.com</h4>
                    <h2>Status message: Approved</h2>
                    <div className="status-btns">
                        <button className="reschedule">Reschedule Appointment</button>
                        <button className="cancel">Cancel Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingStatus;