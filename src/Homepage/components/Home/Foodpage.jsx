import React from 'react'
import "./Foodpage.css"
import { Link } from "react-router-dom";

function Foodpage() {
  return (
    <div className='Food'>
        <Link className='bttn' to="/service">ORDER NOW</Link>
    </div>
    
    
    
  )
}

export default Foodpage