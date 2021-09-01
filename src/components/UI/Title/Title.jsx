import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const TitleInner = ({ children = "" }) => {
  return <h2 className="title">{children}</h2>;
};

TitleInner.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export const Title = memo(TitleInner);
