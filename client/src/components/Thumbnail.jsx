import React from 'react';

const Thumbnail = ({photo}) => {
  return (
    <div className ="column">
      <img className="demo cursor" src={photo} style={{"width": "100%"}}></img>
    </div>
  )
}

export default Thumbnail;