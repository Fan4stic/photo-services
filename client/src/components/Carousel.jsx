import React from 'react';
import Track from './Track.jsx';
import Modal from './Modal.jsx';
import Thumbnail from './Thumbnail.jsx';
import axios from 'axios';
import '../style/main.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      modalActive: false,
      modalPhoto: {},
      helpActiveButton: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setMainModal = this.setMainModal.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
    this.photoChunker = this.photoChunker.bind(this);
    this.helpActive = this.helpActive.bind(this);
  }

  componentDidMount() {
    axios.get('/api/restaurants/:resID/photos')
    .then( ({data}) => this.setState({photos: data.photos.slice(0,18)}))
  }

  openModal () {
    this.setState({modalActive: true})
  }

  closeModal () {
    this.setState({modalActive: false})
  }

  setMainModal(target) {
    this.setState({modalPhoto: target})
  }

  nextPhoto(photos, modalPhoto, callback) {
    // create variable for next index
    let nextIndex = null;
    // iterate over photos arary
    for (var i = 0; i < photos.length; i++) {
      // if current photo id matches mainModal id set next index variable equal to this index plus one
      if (photos[i]._id === modalPhoto._id) {
        nextIndex = i + 1;
        break;
      }
    }
    if (nextIndex === photos.length) {
      nextIndex = 0
    }
    // set mainModal to photo at next index variable
    callback(photos[nextIndex]);
  }

  prevPhoto(photos, modalPhoto, callback) {
    let prevIndex = null;
    for(var i = 0; i < photos.length; i++) {
      if (photos[i]._id === modalPhoto._id) {
        prevIndex = i - 1;
        break;
      }
    }
    if(prevIndex < 0) {
      prevIndex = photos.length - 1
    }
    callback(photos[prevIndex]);
  }

  photoChunker(photos) {
    let result = []
    for (let i = 0; i < photos.length; i +=3) {
        let chunk = photos.slice(i, i + 3)
        result.push(chunk)
    }
    return result
}
  helpActive() {
    this.setState({helpActiveButton: !helpActiveButton})
  }


  render() {
    return(
      <div className="container">
        <Track photos={this.state.photos} openModal={this.openModal} setMainModal={this.setMainModal}/>
        {this.state.modalActive && <Modal photos={this.state.photos} modalPhoto={this.state.modalPhoto} setMainModal={this.setMainModal} closeModal={this.closeModal} nextPhoto={this.nextPhoto} prevPhoto={this.prevPhoto} nthElement={this.nthElement} photoChunker={this.photoChunker} helpActive={this.helpActive} helpActiveButton={this.state.helpActiveButton}/>}
      </div>
    )
  }
}

export default Carousel;