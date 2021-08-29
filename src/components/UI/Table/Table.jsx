import React, { memo } from "react";
import PropTypes from "prop-types";
import { Pages } from "./../Pages/Pages";
import { Filter } from "../Filter/Filter";
import "./Table.scss";

const TableInner = ({
  children = "",
  configureFilter,
  addonComponent,
  onChangePage,
  divisor,
  count,
}) => {
  return (
    <div className="block">
      <Filter {...configureFilter} addonComponent={addonComponent} />
      <div className="block__main">{children}</div>
      <Pages onChangePage={onChangePage} divisor={divisor} count={count} />
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
  onChangePage: PropTypes.func.isRequired,
  divisor: PropTypes.number,
  count: PropTypes.number.isRequired,
};

export const Table = memo(TableInner);
