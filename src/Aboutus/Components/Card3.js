import React from 'react'

function Card(props) {
  return (
    <div className='Container5'>
        <div className="image-container5">
            <img src={props.imageUrl} alt="Error" />
        </div>
        <div className="card-container5">

        <div className="card-title5">
             <h3>{props.title}</h3>
        </div>
        <div className="card-body5">
            <p>{props.body}</p>
        </div>
        </div>
    </div>
  )
}

export default Card