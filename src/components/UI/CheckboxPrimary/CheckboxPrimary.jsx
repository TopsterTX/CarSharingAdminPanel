import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import "./CheckboxPrimary.scss";

function CheckboxPrimaryInner({ children, active, onClick }) {
  const clickHandler = useCallback(
    (active) => {
      return onClick(!active);
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