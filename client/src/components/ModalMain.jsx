import React from 'react';
import ModalInfo from './ModalInfo.jsx';

const ModalMain = (props) => {
  return(
    <div className="modal-column-left-main">
      <img className="modal-column-left-main-photo"src={props.modalPhoto.url}></img>
      <ModalInfo info={props.modalPhoto} helpActive={props.helpActive} helpActiveButton={props.helpActiveButton}/>
  </div>
  )
}

export default ModalMain;