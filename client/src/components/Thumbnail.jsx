import React from 'react';

const Thumbnail = (props) => {
  return (
    <div className ="column" onClick={props.openModal} onMouseEnter={() => props.setMainModal(props.photo)}>
      <img className="demo cursor" src={props.photo.url} style={{"width": "100%"}}></img>
    </div>
  )
}

export default Thumbnail;