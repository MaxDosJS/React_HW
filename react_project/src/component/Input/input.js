import React, { useState } from 'react';

function Input(props) {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <input 
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        position: props.position,
        left: props.left,
        top: props.top,
        bottom: props.bottom,
        fontSize: props.fontSize,
        borderRadius: props.borderRadius,
        border: props.border,
        placeholder: props.placeholder,
        color: props.color,
      }}
    />
  );
}

export default Input;