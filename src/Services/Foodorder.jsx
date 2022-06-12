import React, { useState } from "react";
import "./Foodorder.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Foodorder() {
  
  
  const [fullname, setName] = useState("");
  const [phoneno, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    console.warn(fullname, email, phoneno, address);
    let order = await fetch("http://localhost:5000/order", {
      method: "post",
      body: JSON.stringify({fullname, email, phoneno, address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    order = await order.json();
    console.warn(order);
  };

  return (
    <>
      <section className="food-search">
        <div className="container">
          <h2 className="text-center text-white">
            Fill this form to confirm your order
          </h2>
          <form action="#" className="order">
          
            <fieldset className="bound">
              <legend className="legend">Delivery Details</legend>
              <div className="order-label">Full Name</div>
              <input
                type="text"
                name="full-name"
                placeholder="E.g. Chetan Raj Beniwal"
                value={fullname}
                onChange={(e) => setName(e.target.value)}
                className="input-responsive"
                required
              />
              <div className="order-label">Phone Number</div>
              <input
                type="tel"
                name="contact"
                placeholder="E.g. 9467xxxxxx"
                value={phoneno}
                onChange={(e) => setPhone(e.target.value)}
                className="input-responsive"
                required
              />
              <div className="order-label">Email</div>
              <input
                type="email"
                name="email"
                placeholder="E.g. abc123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-responsive"
                required
              />
              <div className="order-label">Address</div>
              <textarea
                name="address"
                rows="7"
                placeholder="E.g. Street, City, Country"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-responsive"
                required
              ></textarea>
              <Link onClick={submit} to="/service/foodorder/confirm" className="orderbtn" type="button">
                Confirm Order
              </Link>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}

export default Foodorder;
