import React from 'react';

const ModalInfo = (props) => {
  return(
    <div className="modal-column-left-info">
      {props.info.description}
      {props.info.date}
      {props.info.user.username}
      {`Friends: ${props.info.user.friends}`}
      {`Reviews: ${props.info.user.reviews}`}
    </div>
  )
}

export default ModalInfo;