import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import axios from 'axios';
import '../style/main.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      slideIndex: 1,
      naturePhotos: ['https://www.w3schools.com/howto/img_woods.jpg', 'https://www.w3schools.com/howto/img_5terre.jpg', 'https://www.w3schools.com/howto/img_mountains.jpg', 'https://www.w3schools.com/howto/img_lights.jpg', 'https://www.w3schools.com/howto/img_snow.jpg']
    }
  }

  componentDidMount() {
    axios.get('api/restaurants')
    .then( ({data}) => this.setState({photos: data.photos.slice(0,4)}))
    //showSlides(this.state.slideIndex);
  }


  render() {
    return(
<div className="container">

  {/* <a className="prev" >&#10094;</a>
  <a className="next" >&#10095;</a> */}

  <div className="row">
    {this.state.naturePhotos.map((photo, index) => <Thumbnail photo ={photo} key={index}/>)}
  </div>

</div>
    )
  }
}

export default Carousel;