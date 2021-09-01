import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./CheckboxPrimary.scss";
import { useDispatch } from "react-redux";

function CheckboxPrimaryInner({
  children = <></>,
  active = false,
  onClick = () => {},
}) {
  const dispatch = useDispatch();
  const clickHandler = useCallback(
    (active) => {
      return dispatch(onClick(!active));
    },
    [active, onClick]
  );

  return (
    <>
      <div className="checkbox-primary__block">
        <label
          htmlFor=""
          className={`checkbox-primary__label ${active ? "active" : null}`}
          onClick={() => clickHandler(active)}
        >
          {children}
        </label>
        <input type="checkbox" className="checkbox-primary__input" />
      </div>
    </>
  );
}

CheckboxPrimaryInner.propTypes = {
  children: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const CheckboxPrimary = memo(CheckboxPrimaryInner);
