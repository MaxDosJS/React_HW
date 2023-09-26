import './star.css'
import React from 'react';

function ImageComponent({ src, props }) {
  return (
    <img className='Star-img' 
        src={src}  
        />
  );
}

export default ImageComponent;