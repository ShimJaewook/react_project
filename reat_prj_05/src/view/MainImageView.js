import React, { Component } from 'react'
import './MainImageView.css';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class MainImageView  extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 4000,
      autoplay: true,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
    };

    const imageList = this.props.imageList.map((image) => { return image.imgUrl});
    
    return (
          <Slide className="slide-container" ref={this.slideRef} {...properties}>
            {imageList.map((each, index) => (
              <div key={index} className="each-slide">
                <img src={each} alt="sample" />
              </div>
            ))}
          </Slide>
    );
  }
}

export default MainImageView;

