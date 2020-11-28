import React from 'react';

const ModalRectangle = (props) => {
  return (
    <div onClick={() => props.setMainModal(props.photo)}>
      <img className="demo cursor modal-thumbnail rectangle" src={props.photo.url}></img>
    </div>
  )
}

export default ModalRectangle;