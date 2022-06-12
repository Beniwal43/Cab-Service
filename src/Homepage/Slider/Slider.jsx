import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css"
import {Link} from "react-router-dom"

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow " onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel" className="slider__image"/>
              )}
              {index === current && (
                <div className="slider__container">
                    <h1 className="slider__title">{slide.title}</h1>
                  <div className="container__contain">
                    <h5 className="slider__content"> {slide.range}</h5>
                    <h5 className="slider__content">{slide.price}</h5>
                    <Link className="sliderbtn"to="/home/confirm">Book Ride</Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    );
  };
  

export default Slider