import React from 'react';

const Next = (props) => {
  return(
    <div className="modal-column-left-next">
      <a className="modal-column-left-next-arrow" onClick={() => props.nextPhoto(props.photos, props.modalPhoto, props.setMainModal)}>&#10095;</a>
    </div>
  )
}

export default Next;