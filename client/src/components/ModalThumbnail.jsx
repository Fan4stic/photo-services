import React from 'react';

const ModalThumbnail = (props) => {
  return (
    <div className ="modal-thumbnail" >
      <img className="demo cursor" src={props.photo} style={{"width": "100%"}}></img>
    </div>
  )
}

export default ModalThumbnail;