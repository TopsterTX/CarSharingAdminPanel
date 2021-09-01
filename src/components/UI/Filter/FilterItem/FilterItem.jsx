import React, { memo } from "react";
import PropTypes from "prop-types";
import "./FilterItem.scss";

const FilterItemInner = ({ children }) => {
  return <div className="filter__item">{children}</div>;
};

FilterItemInner.propTypes = {
  children: PropTypes.element.isRequired,
};

export const FilterItem = memo(FilterItemInner);
