import React from 'react';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

const Modal = (props) => {
  return(
    <div className="modal">
      <div className="close" onClick={() => props.closeModal()}>
        Close
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M17.657 19.071L12 13.414l-5.657 5.657-1.414-1.414L10.586 12 4.929 6.343l1.414-1.414L12 10.586l5.657-5.657 1.414 1.414L13.414 12l5.657 5.657-1.414 1.414z"/>
        </svg>
      </div>
      <div className="modal-content">
        <LeftColumn setMainModal={props.setMainModal} photos={props.photos} modalPhoto={props.modalPhoto} nextPhoto={props.nextPhoto}  prevPhoto={props.prevPhoto} helpActive={props.helpActive} helpActiveButton={props.helpActiveButton}/>
        <RightColumn photos={props.photos} setMainModal={props.setMainModal} photoChunker={props.photoChunker}/>
      </div>
    </div>
  )
}

export default Modal;