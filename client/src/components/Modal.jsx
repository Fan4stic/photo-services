import React from 'react';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

const Modal = (props) => {
  return(
    <div className="modal">
      <div className="close" onClick={() => props.closeModal()}>close &times;</div>
      <div className="modal-content">
        <LeftColumn setMainModal={props.setMainModal} modalPhoto={props.modalPhoto} modalPhoto={props.modalPhoto} />
        <RightColumn photos={props.photos} />
      </div>
    </div>
  )
}

export default Modal;