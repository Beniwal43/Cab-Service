import React from "react";
import "./Card2c.css"

function Card(props) {
  return (
    <div className="Containerc">
      <div className="card-containerc">
        <div className="card-titlec">
          <h3>{props.title}</h3>
        </div>
        <div className="card-bodyc">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
