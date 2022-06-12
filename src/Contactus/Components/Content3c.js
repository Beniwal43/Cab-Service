import React from "react";
import "./Content3c.css";
import "./Cardc.css"
import Cardc from "./Cardc";

function Content3() {
  return (
    <>
      <section>
        <div className="main3c">
          <div className="text3c">
            <h1>OUR OFFICE</h1>
            <h4>800 S W Town, greenry View, Rohini, New Delhi, India</h4>

            <div className="cardc">
              <Cardc imageUrl="Image/1.PNG" />
              <Cardc imageUrl="Image/2.PNG" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content3;
