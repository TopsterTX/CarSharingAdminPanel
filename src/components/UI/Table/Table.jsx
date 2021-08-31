import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Table.scss";

const TableInner = ({ children = "" }) => {
  return <div className="table-body">{children}</div>;
};

TableInner.propTypes = {
  children: PropTypes.any.isRequired,
};

export const Table = memo(TableInner);
