import React from 'react';
import './button.scss';

function Button({ title, ...rest }) {
  return <button className="button" {...rest}>{title}</button>
}

export default Button
