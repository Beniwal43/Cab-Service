import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Contactus from "./Contactus/Contactus";
import Homepage from "./Homepage/Homepage";
import Aboutus from "./Aboutus/Aboutus";
import Services from "./Services/Services.jsx";
import Foodorder from "./Services/Foodorder";
import Login from "./Login/Login";
import { FooterContainer } from "./Footer/containers/footer";
import Orderconfirmation from "./Services/Orderconfirmation";
import Rideconfirmation from "./Homepage/Rideconfirmation";
import ImageSlider from "./Homepage/Slider/Slider.jsx";
import { SliderData } from "./Homepage/Slider/SliderData";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/service/foodorder" element={<Foodorder />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route
          exact
          path="/service/foodorder/confirm"
          element={<Orderconfirmation />}
        />
        <Route exact path="/home/confirm" element={<Rideconfirmation />} />
        <Route
          exact
          path="/home/slider"
          element={<ImageSlider slides={SliderData} />}
        />
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;
