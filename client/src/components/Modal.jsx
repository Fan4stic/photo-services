import React from 'react';
import ModalThumbnail from './ModalThumbnail.jsx';
import ModalInfo from './ModalInfo.jsx';

const Modal = (props) => {
  return(
    <div className="modal">
    <span className="close" onClick={() => props.closeModal()}>close &times;</span>
      <div className="modal-content">
      <div className="modal-column-left">
        <img className="modal-column-left-main" src={props.modalPhoto.url}></img>
        {false && <ModalInfo info={props.modalPhoto}/>}
      </div>
      <div className="modal-column-right">
        <h3 className="modal-column-right-header">Photos For Restaurant</h3>
        <div className="modal-column-right-flexcontainer">
          {props.photos.map((photo, index) => <ModalThumbnail photo={photo} key={index} setMainModal={props.setMainModal}/>)}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Modal;