import React from 'react';
import "react-slideshow-image/dist/styles.css"
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import './slideshow.css'
import { Zoom } from 'react-slideshow-image';

const Slideshow = () => {
  const images = [
    image1,
    image2,
    image3
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;