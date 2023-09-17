import React from "react";

export default function InputField(props) {
  return (
    <div>
      <input
        className="form-field"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        
      />
      {props.submitted && !props.value ? <span><br></br> Please enter a {props.placeholder.toLowerCase()}</span> : null}
    </div>
  );
}