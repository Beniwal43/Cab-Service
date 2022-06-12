import React from 'react'

function Card(props) {
  return (
    <div className='Container'>
        <div className="image-container">
            <img src={props.imageUrl} alt="Error" />
        </div>
        <div className="card-container">

        <div className="card-title">
             <h3>{props.title}</h3>
        </div>
        <div className="card-body">
            <p>{props.body}</p>
        </div>
        </div>
        <div className="btn">
            <button>
                {/* <a href=""> */}
                    View More
                {/* </a> */}
            </button>
        </div>
    </div>
  )
}

export default Card