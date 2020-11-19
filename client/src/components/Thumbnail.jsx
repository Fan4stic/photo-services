import React from 'react';

const Thumbnail = (props) => {
  return (
    <div className ="column" onClick={props.openModal}>
      <img className="demo cursor" src={props.photo} style={{"width": "100%"}}></img>
    </div>
  )
}

export default Thumbnail;