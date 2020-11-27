import React from 'react'
import ModalFlexPhotos from './ModalFlexPhotos.jsx';

const RightColumn = (props) => {
  return (
    <div className="modal-column-right">

      <div className="modal-column-right-header">
        <h3 className="modal-column-right-header-title">Photos for Restaurant</h3>
        <a className="modal-column-right-header-subtitle">See all {props.photos.length}</a>
      </div>

      <div className="ModalFlexPhotosContainer">
        {props.photoChunker(props.photos).map((photos, index) => <ModalFlexPhotos photos={photos} key={index} setMainModal={props.setMainModal}/>)}
      </div>

  </div>
  )
}

export default RightColumn;