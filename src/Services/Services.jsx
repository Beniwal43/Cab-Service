import React from "react";
import "./Services.css";
import {
  Link
} from "react-router-dom";


export default function Services() {
  return (
    <>
    {/* Header  */}
      <header>
        <div className="header">
          <h1 className="box1">Order Food To Your ride</h1>
        </div>
      </header>
         {/* Categories heading */}
      <div className="heading1">
        <h1>Categories</h1>
      </div>

      <div className="container1">
        <div className="box2">
          <img
            className="pic1"
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
            />
          <h1>Breakfast</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure id
            consequatur magni asperiores
          </p>
        </div>
        <div className="box2">
          <img
            className="pic1"
            src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />
          <h1>Lunch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure id
            consequatur magni asperiores 
          </p>
        </div>
        <div className="box2">
          <img
            className="pic1"
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="unable to load"
          />
          <h1>Dinner</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure id
            consequatur magni asperiores 
          </p>
        </div>
      </div>

      {/* Break fast section */}

      <div className="heading2">
        <h1 >Breakfast categories</h1>
      </div>
      <div className="container2">
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="unable to load"
          />
          <h1>Sandwiches</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/1109591/pexels-photo-1109591.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="unable to load"
          />

          <h1>Fruit Salad</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/3642/drink-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Orange Juice</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Pan Cake</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
      </div>
      {/* Lunch section */}

      <div className="heading2">
        <h1 id="#lunch">Lunch categories</h1>
      </div>
      <div className="container2">
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="unable to load"
          />
          <h1>Burger</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Pasta</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Noodles</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="unable to load"
          />

          <h1>Chicken</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
      </div>

      
      {/* Dinner section */}
      <div className="heading3">
        <h1 id="#dinner">Dinner categories</h1>
      </div>
      <div className="container2">
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />
          <h1>Salad</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Biryani</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="unable to load"
          />

          <h1>Soup</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
        <div className="box3">
          <img
            className="pic2"
            src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg"
            alt="unable to load"
          />

          <h1>Rajma rice</h1>
          <Link className="bclass" to="/service/foodorder">ADD</Link>
        </div>
      </div>
    </>
  );
}