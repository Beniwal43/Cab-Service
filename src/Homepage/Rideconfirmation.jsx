import React from 'react'
import "./Rideconfirmation.css"
import { Link } from "react-router-dom";

function RideConfirmation() {
  return (
    <div className="ride__confirmation">
        <div className="main__ride">
            <h1 className='trheading'>Your Ride has been</h1>
            {/* <h1 className='mrheading'>  has been</h1> */}
            <h1 className='brheading'> Confirmed</h1>
            <Link className="rbtn" to="/service">Want Food btw Ride</Link>
        </div>

    </div>
  )
}

export default RideConfirmation