import React from 'react'

function Card(props) {
  return (
  <>
    <div className='Container3'>
        <div className="card-container3">
        <div className="card-title3">
             <h3>{props.title}</h3>
        </div>
        <div className="card-body3">
            <ul>
                <li>{props.l1}</li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
                <li>{props.l4}</li>
                <li>{props.l5}</li>
            </ul>
        </div>
        </div>
    </div>
  </>
  )
}

export default Card