import React from 'react';

const Previous = (props) => {
  return(
    <div className="modal-column-left-prev">
      <a className="modal-column-left-prev-arrow" onClick={() => props.prevPhoto(props.photos, props.modalPhoto, props.setMainModal)}>&#10094;</a>
    </div>
  )
}

export default Previous;