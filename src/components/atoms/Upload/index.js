import React from 'react';
import './upload.scss';

const Upload = ({ image, ...rest }) => {
  return (
    <div className="upload">
      {image && <img className="preview" src={image} alt="preview" />}
      <input type="file" {...rest} />
    </div>
  )
}

export default Upload
