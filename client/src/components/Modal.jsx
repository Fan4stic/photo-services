import React from 'react';
import ModalThumbnail from './ModalThumbnail.jsx';

const Modal = (props) => {
  return(
    <div className="modal">
    <span className="close" onClick={() => props.closeModal()}>&times;</span>
      <div className="modal-content">
      <div className="modal-column-left">
        <img className="modal-column-left-main" src={props.photos[0]}></img>
      </div>
      <div className="modal-column-right">
        <p>Photos For Restaurant</p>
        <div className="modal-column-right-flexcontainer">
          {props.photos.map((photo, index) => <ModalThumbnail photo={photo} key={index} />)}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Modal;