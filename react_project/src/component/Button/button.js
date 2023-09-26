import React from "react";
import "./button.css";
function Button(props) {
  return (
    <button
      className="my-button"
      style={{ padding: props.padding, 
        margin: props.margin,
        position: props.position,
        left: props.left,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        border: props.border,
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
         }}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
