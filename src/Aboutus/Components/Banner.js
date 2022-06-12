import React from 'react'

function Card(props) {
  return (
  <>
    <div className='Bannerfunc'>
        <h1>{props.heading}</h1>
        <h4>{props.body}</h4>
    </div>
  </>
  )
}

export default Card