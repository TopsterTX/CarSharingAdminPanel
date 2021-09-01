import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ButtonRoute.scss";

const ButtonRouteInner = ({
  to = "",
  type = "",
  onClick = () => {},
  children,
}) => {
  const clickHadler = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <NavLink
      to={to}
      className={`buttons__item buttons__item--${type}`}
      key={uuidv4()}
      onClick={() => clickHadler()}
    >
      <span className="buttons__text ">{children}</span>
    </NavLink>
  );
};

ButtonRouteInner.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export const ButtonRoute = memo(ButtonRouteInner);
