import React from "react";
import PropTypes from "prop-types";
import "./Image.module.scss";

function imageHandler(path) {
  if (!path) {
    return "";
  } else if (path.indexOf("data:image") !== -1) {
    return `https://api-factory.simbirsoft1.com${path}`;
  } else {
    return path;
  }
}

const Image = ({ path = "" }) => {
  return (
    <div className="image__wrapper">
      <img src={imageHandler(path)} alt="" className="image" />;
    </div>
  );
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Image;
