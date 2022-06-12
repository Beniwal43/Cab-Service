import React,{useState} from "react";
import "./Middle.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Middle() {

  const [Pickup__Location, setPickup__Location] = useState("");
  const [Destination__Location, setDestination__Location] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    console.warn(Pickup__Location, Destination__Location);
    let result1 = await fetch("http://localhost:5000/ridelocation", {
      method: "post",
      body: JSON.stringify({ Pickup__Location, Destination__Location }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result1 = await result1.json();
    console.warn(result1);
  };

  return (
    <div className="middle">
      <form action="#">
        <div className="rideform">
          <div className="inputcontainer2">
            <input
              className="inputtxt"
              type="text"
              value={Pickup__Location}
              onChange={(e) => setPickup__Location(e.target.value)}
              placeholder="Enter Pickup Location"
            />
            <input
              className="inputtxt"
              type="text"
              value={Destination__Location}
              onChange={(e) => setDestination__Location(e.target.value)}
              placeholder="Enter destination"
            />
          </div>
          <div className="ridebtncontainer">
            <Link className="ridebtn" to="/home/confirm" onClick={submit}>Confirm</Link>
            <Link className="ridebtn" to="/home/slider">Select Car</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Middle;
