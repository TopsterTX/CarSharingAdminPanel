import React, { memo } from "react";
import PropTypes from "prop-types";
import "./TableContainer.scss";

const TableContainerInner = ({ children }) => {
  return <div className="table-container">{children}</div>;
};

TableContainerInner.propTypes = {
  children: PropTypes.element.isRequired,
};

export const TableContainer = memo(TableContainerInner);
