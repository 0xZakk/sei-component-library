import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button
      className={`button-${props.type} ${props.large ? 'button-large' : ''}`}>
      {props.label}
    </button>
  );
}

export default Button;
