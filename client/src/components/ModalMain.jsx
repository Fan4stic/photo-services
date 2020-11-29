import React from 'react';
import ModalInfo from './ModalInfo.jsx';

const ModalMain = (props) => {
  return(
    <div className="modal-column-left-main">
      <img className="modal-column-left-main-photo"src={props.modalPhoto.url}></img>
      <ModalInfo info={props.modalPhoto} helpfulActive={props.helpfulActive} notHelpfulActive={props.notHelpfulActive} reportActive={props.reportActive} toggleHelpfulActive={props.toggleHelpfulActive} toggleNotHelpfulActive={props.toggleNotHelpfulActive} toggleReportActive={props.toggleReportActive}/>
  </div>
  )
}

export default ModalMain;