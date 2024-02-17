import React from 'react'
import "./Shimmer.css"
function Shimmer(props) {
  return (
    <>
    <div className="shimmer-wrapper" style={props.style} >
      <div className="shimmer">
      </div>
    </div>
    </>
  )
}

export default Shimmer