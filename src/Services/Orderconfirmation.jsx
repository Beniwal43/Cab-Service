import React from 'react'
import "./OrderConfirmation.css"
import { Link } from "react-router-dom";


function Orderconfirmation() {
  return (
    <div className="order__confirmation">
        <div className="main__order">
            <h1 className='tfoheading'>Your Order has been</h1>
            <h1 className='bfoheading'> Confirmed</h1>
            <Link className="ofbtn" to="/home">See Your Ride</Link>
        </div>

    </div>
  )
}

export default Orderconfirmation