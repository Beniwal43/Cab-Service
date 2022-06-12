import React from "react";
import "./Content2c.css";
import "./Card2c.css"
import Card2 from "./Card2c";

function Content2() {
  return (
    <>
      <section>
        <div className="main2c">
          <div className="text2c">
            <h1>Contact Us:</h1>
            <div className="cardc">
              <div className="section1">
                <Card2
                  title="Collaboration and Advertising"
                  body="marketing@cabservice.com"
                />
                <Card2
                  title="Policy and Government Relations"
                  body="gr@cabservice.com"
                />
              </div>
              <div className="section2">
                <Card2 title="PR Department" body="pr@cabservice.com" />
                <Card2 title="Support Service" body="support@cabservice.com" />
              </div>
            </div>
            <div className="section3">
                <Card2 title="Vulernability reports and other cybersecurity issues" body="cybersecurity@cabservice.com" />
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content2;
