import React, { useContext } from 'react';
import thankYouSvg from '../../img/thankyou.svg'
import { Link } from 'react-router-dom';
import { BookingContext } from '../../context/bookingContex';
import { AuthContext } from '../../context/authContext';

function AfterBooking() {
    const { bookingData } = useContext(BookingContext);
    const { currentUser } = useContext(AuthContext);


    // Access the booking data
    const { cost, selectedDate, productName, productTime } = bookingData;

    // Function to format the selected date
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    // Function to format the cost
    const formatCost = (cost) => {
        return `Rs. ${cost}`;
    };

    // Function to format the time
    const formatTime = (productTime) => {
        return `${productTime}`;
    };

    return (
        <div className='thankyouMainDiv'>
            <div className="thankyouImg">
                <img src={thankYouSvg} alt="" />
            </div>
            <div className="thankyouPara">
                <h1>THANK YOU</h1>

                <p className='thankPara'>Mr / Miss <span>{currentUser.name}</span> for booking our package. We will contact on number <span>{currentUser.phone}</span> soon. If you have any questions or need further assistance, please contact our customer support.
                </p>

                <h1 style={{ textAlign: "center", fontSize: "3.34rem" }}>Your booking details</h1>

                <div className="packageList">
                    <ul>
                        <li><span>Package Name:</span> {productName}</li>
                        <li><span>Cost:</span> {formatCost(cost)}</li>
                        <li><span>Time:</span> {formatTime(productTime)}</li>
                        <li><span>Selected Date:</span> {formatDate(selectedDate)}</li>
                    </ul>
                </div>
               
                <div className="buttons">
                    <Link style={{ textDecoration: "none", }} to="/package">
                        <button className='myBtn'style={{padding:"0rem 0.8rem"}} >Back to Packages</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default AfterBooking