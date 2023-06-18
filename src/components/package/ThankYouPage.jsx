import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import thankYouSvg from '../../img/thankyou.svg'
import { Link } from 'react-router-dom';


function ThankYouPage() {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className='thankyouMainDiv'>
        <div className="thankyouImg">
            <img src={thankYouSvg} alt="" />
        </div>
        <div className="thankyouPara">
            <h1>Thank you {currentUser.name} for booking our package. We will contact on number {currentUser.phone} soon.</h1>
            <div className="thankBtn">
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/package'>
                    <button>Package</button>
                
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ThankYouPage
