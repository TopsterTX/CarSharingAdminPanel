import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./Image.scss";

const ImageInner = ({ path, ...props }) => {
  const imageHandler = useCallback(
    (path) => {
      if (!path) {
        return "";
      } else if (path.indexOf("data:image") !== -1) {
        return path;
      } else {
        return `https://api-factory.simbirsoft1.com${path}`;
      }
    },
    [path]
  );
  return (
    <div className="image__wrapper" {...props}>
      <img src={imageHandler(path)} alt="" className="image" />
    </div>
  );
};

ImageInner.propTypes = {
  path: PropTypes.string.isRequired,
};

export const Image = memo(ImageInner);
