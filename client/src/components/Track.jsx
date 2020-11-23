import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Track =(props) => {
  return(
    <div className="row">
      <a className="prev" >&#10094;</a>
      <a className="next" >&#10095;</a>
      {props.photos.map((photo, index) => <Thumbnail photo={photo} key={index} openModal={props.openModal} setMainModal={props.setMainModal}/>).slice(0,5)}
    </div>
  )
}

export default Track;