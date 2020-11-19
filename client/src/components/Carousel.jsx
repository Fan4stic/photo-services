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
      naturePhotos: ['https://www.w3schools.com/howto/img_woods.jpg', 'https://www.w3schools.com/howto/img_5terre.jpg', 'https://www.w3schools.com/howto/img_mountains.jpg', 'https://www.w3schools.com/howto/img_lights.jpg', 'https://www.w3schools.com/howto/img_snow.jpg'],
      modalActive: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    axios.get('api/restaurants')
    .then( ({data}) => this.setState({photos: data.photos.slice(0,8)}))
    //showSlides(this.state.slideIndex);
  }

  openModal () {
    this.setState({modalActive: true})
  }

  closeModal () {
    this.setState({modalActive: false})
  }

  render() {
    return(
      <div className="container">
        <Track photos={this.state.naturePhotos} openModal={this.openModal}/>
        {this.state.modalActive && <Modal photos={this.state.naturePhotos} closeModal={this.closeModal} />}
      </div>
    )
  }
}

export default Carousel;