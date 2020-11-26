import React from 'react'
import ModalThumbnail from './ModalThumbnail.jsx';

const RightColumn = (props) => {
  return (
    <div className="modal-column-right">

      <div className="modal-column-right-header">
        <h3 className="modal-column-right-header-title">Photos for Restaurant</h3>
        <a className="modal-column-right-header-subtitle">See all 192</a>
      </div>

      <div className="modal-column-right-flexcontainer">
        {props.photos.map((photo, index) => <ModalThumbnail photo={photo} key={index} setMainModal={props.setMainModal}/>)}
      </div>

  </div>
  )
}

export default RightColumn;