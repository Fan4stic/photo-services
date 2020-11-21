import React from 'react';

const ModalThumbnail = (props) => {
  return (
    <div className ="modal-thumbnail" onClick={() => props.setMainModal(props.photo)}>
      <img className="demo cursor" src={props.photo.url} style={{"width": "100%"}}></img>
    </div>
  )
}

export default ModalThumbnail;