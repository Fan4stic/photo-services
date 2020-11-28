import React from 'react';
import ModalRectangle from './ModalRectangle.jsx';
import ModalSquare from './ModalSquare.jsx';
import ModalThumbnail from './ModalThumbnail.jsx';

const ModalFlexPhotos = (props) => {
  return(
      <div className="ModalFlexPhotos">
        <ModalRectangle photo={props.photos[0]} setMainModal={props.setMainModal}/>
        <ModalSquare photo={props.photos[1]} setMainModal={props.setMainModal}/>
        <ModalSquare photo={props.photos[2]} setMainModal={props.setMainModal}/>
      </div>
  )
}

export default ModalFlexPhotos;