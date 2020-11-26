import React from 'react';
import Previous from './Previous.jsx';
import ModalMain from './ModalMain.jsx';
import Next from './Next.jsx';

const LeftColumn = (props) => {
  return (
    <div className="modal-column-left">
      <Previous setMainModal={props.setMainModal} />
      <ModalMain modalPhoto={props.modalPhoto} />
      <Next setMainModal={props.setMainModal}/>
  </div>
  )
}

export default LeftColumn;