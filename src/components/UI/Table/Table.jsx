import React, { memo } from "react";
import PropTypes from "prop-types";
import { Pages } from "./../Pages/Pages";
import { Filter } from "../Filter/Filter";
import "./Table.scss";

const TableInner = ({
  children = "",
  configureFilter = {},
  addonComponent = <></>,
}) => {
  return (
    <div className="block">
      <Filter {...configureFilter} addonComponent={addonComponent} />
      <div className="block__main">{children}</div>
      <Pages />
    </div>
  );
};

TableInner.propTypes = {
  children: PropTypes.any.isRequired,
  configureFilter: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired
    ).isRequired
  ).isRequired,
};

export const Table = memo(TableInner);
