import React from 'react';
import "react-slideshow-image/dist/styles.css"

import image4 from '../images/image4.png';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import './slideshow.css'
import { Zoom } from 'react-slideshow-image';

const Slideshow = () => {
  const images = [
    image4,
    image5,
    image6
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