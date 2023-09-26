import './star.css'
import React from 'react';

function StarIconComponent({ src, props }) {
  return (
    <img className='Star-img-icon' 
        src={src}  
        />
  );
}

export default StarIconComponent;