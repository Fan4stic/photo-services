import React from 'react';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

const Modal = (props) => {
  return(
    <div className="modal">
      <div className="close" onClick={() => props.closeModal()}>close &times;</div>
      <div className="modal-content">
        <LeftColumn setMainModal={props.setMainModal} photos={props.photos} modalPhoto={props.modalPhoto} nextPhoto={props.nextPhoto}  prevPhoto={props.prevPhoto}/>
        <RightColumn photos={props.photos} setMainModal={props.setMainModal}/>
      </div>
    </div>
  )
}

export default Modal;