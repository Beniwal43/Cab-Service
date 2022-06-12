import React from "react";
import "./Content.css";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import Banner from "../Components/Banner";
import Card3 from "../Components/Card3";

function Content() {
  return (
    <>
      <section>
        <div className="main">
          <div className="text">
            <h3>Who we are</h3>
            <h1>About Us</h1>
            <p className="p1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident et delectus iusto, repellendus{" "}
            </p>
            <p className="p2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              provident? Modi unde eum, pariatur, dignissimos voluptas inventore
              at vel deleniti quam cum, quidem placeat ullam.{" "}
            </p>
            <button type="button">Read More</button>
          </div>
          <img src="Image/main_about.jpg" alt="about us" />
        </div>
      </section>
      <section>
        <div className="main2">
          <div className="text2">
            <h1>FREEDOM OF CHOICE WITH US</h1>
            <h4>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              </h4>
              
            <div className="card">
            <Card
              title="Our Vision"
              imageUrl="Image/vision.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
             <Card
              title="Our Mission"
              imageUrl="Image/mission.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
             <Card
              title="Our Strategy"
              imageUrl="Image/strategy.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="main3">
          <div className="text3">
            <h1>OUR VALUES:</h1>
            <div className="card2">
            <Card2
              title="People Come First"
              l1="Openness and mutual support"
              l2="To lead by example, to do no evil"
              l3="Personal growth and development"
              l4="A position attitude and lust for life"
              l5="To lead by example, to do no evil"
              />
              <Card2
              title="Efficiency"
              l1="Efficiency"
              l2="Common sense and intelligence"
              l3="Accuracy"
              l4="Professionalism"
              l5="Fast communication, flexibility"
              />
              <Card2
              title="Integrity"
              l1="Commintment and engagement"
              l2="Honesty and direct feedback"
              l3="Responsibility"
              l4="Courage and initiative"
              l5="Honesty and direct feedback"
              />
              </div>
              
          </div>
        </div>
      </section>
      <section className="section4">
      <div className="main4">
          <div className="banner">
            <Banner
            heading="200+"
            body="cities in 9 countries"
            />
             <Banner
            heading="10M+"
            body="rides"
            />
             <Banner
            heading="100M"
            body="users"
            />
          </div>
        </div>
      </section>

      <section>
      <div className="main5">
            <div className="card5">
            <Card3
              title="Tranparent terms"
              imageUrl="Image/terms.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
             <Card3
              title="Lower Cost"
              imageUrl="Image/Cost.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
             <Card3
              title="Direct Payments"
              imageUrl="Image/Direct.jpg"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et delectus iusto, repellendus"
            />
            </div>
      </div>
      </section>
    </>
  );
}

export default Content;
