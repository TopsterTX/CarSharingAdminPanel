import React from "react";
import PropTypes from "prop-types";
import "./Image.scss";

function imageHandler(path) {
  if (!path) {
    return "";
  } else if (path.indexOf("data:image") !== -1) {
    return path;
  } else {
    return `https://api-factory.simbirsoft1.com${path}`;
  }
}

const Image = ({ path, ...props }) => {
  return (
    <div className="image__wrapper" {...props}>
      <img src={imageHandler(path)} alt="" className="image" />
    </div>
  );
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Image;
