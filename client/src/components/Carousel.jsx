import React from 'react';
import Title from './Title.jsx';
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
      helpfulActive: false,
      notHelpfulActive: false,
      reportActive: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setMainModal = this.setMainModal.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
    this.photoChunker = this.photoChunker.bind(this);
    this.toggleHelpfulActive = this.toggleHelpfulActive.bind(this);
    this.toggleNotHelpfulActive = this.toggleNotHelpfulActive.bind(this);
    this.toggleReportActive = this.toggleReportActive.bind(this);
  }

  componentDidMount() {
    axios.get('/api/restaurants/2/photos')
    .then( ({data}) => this.setState({photos: data.photos.slice(0,42)}) )
  }

  openModal () {
    this.setState({modalActive: true})
  }

  closeModal () {
    this.setState({modalActive: false})
  }

  setMainModal(target) {
    this.setState({modalPhoto: target});
    this.setState({helpfulActive: false});
    this.setState({notHelpfulActive:false});
    this.setState({reportActive: false});
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
  toggleHelpfulActive() {
    var helpfulActive = this.state.helpfulActive;
    this.setState({helpfulActive: !helpfulActive})
    if(this.state.notHelpfulActive) {
      this.setState({notHelpfulActive: false});
    }
  }

  toggleNotHelpfulActive() {
    var notHelpfulActive = this.state.notHelpfulActive;
    this.setState({notHelpfulActive: !notHelpfulActive})
    if(this.state.helpfulActive) {
      this.setState({helpfulActive: false});
    }
  }

  toggleReportActive() {
    var reportActive = this.state.reportActive;
    this.setState({reportActive: !reportActive})
  }


  render() {
    return(
      <div className="container">
        <Track photos={this.state.photos} openModal={this.openModal} setMainModal={this.setMainModal}/>
        {this.state.modalActive && <Modal photos={this.state.photos} modalPhoto={this.state.modalPhoto} setMainModal={this.setMainModal} closeModal={this.closeModal} nextPhoto={this.nextPhoto} prevPhoto={this.prevPhoto} photoChunker={this.photoChunker} helpfulActive={this.state.helpfulActive} notHelpfulActive={this.state.notHelpfulActive} reportActive={this.state.reportActive} toggleHelpfulActive={this.toggleHelpfulActive} toggleNotHelpfulActive={this.toggleNotHelpfulActive} toggleReportActive={this.toggleReportActive}/>}
      </div>
    )
  }
}

export default Carousel;