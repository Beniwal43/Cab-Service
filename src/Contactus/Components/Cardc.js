import React from "react";

function Card(props) {
  return (
    <div className="Container3c">
      <div className="image-containerc">
        <img src={props.imageUrl} alt="Error" />
      </div>
    </div>
  );
}

export default Card;
