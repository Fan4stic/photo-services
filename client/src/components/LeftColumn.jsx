import React from 'react';
import Previous from './Previous.jsx';
import ModalMain from './ModalMain.jsx';
import Next from './Next.jsx';

const LeftColumn = (props) => {
  return (
    <div className="modal-column-left">
      <Previous photos={props.photos} modalPhoto={props.modalPhoto} setMainModal={props.setMainModal} prevPhoto={props.prevPhoto}/>
      <ModalMain modalPhoto={props.modalPhoto} />
      <Next photos={props.photos} modalPhoto={props.modalPhoto} setMainModal={props.setMainModal} nextPhoto={props.nextPhoto}/>
    </div>
  )
}

export default LeftColumn;