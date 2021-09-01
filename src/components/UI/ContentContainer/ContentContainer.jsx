import React, {memo} from "react";
import PropTypes from "prop-types";
import "./ContentContainer.scss";

const ContentContainerInner = ({ children = "" }) => {
  return <div className="content__container">{children}</div>;
};

ContentContainerInner.propTypes = {
  children: PropTypes.any.isRequired,
};

export const ContentContainer = memo(ContentContainerInner);
