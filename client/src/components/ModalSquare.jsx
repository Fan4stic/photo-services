import React from 'react';

const ModalSquare = (props) => {
  return (
    <div onClick={() => props.setMainModal(props.photo)}>
      <img className="demo cursor modal-thumbnail square-photo" src={props.photo.url}></img>
    </div>
  )
}

export default ModalSquare;