import React, { useRef, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Radio.scss";
import { useDispatch } from "react-redux";

const RadioInner = ({ children, active, item, onClick = () => {} }) => {
  const dispatch = useDispatch();

  let ID = item ? item.id : uuidv4();
  let radio = useRef();
  let label = useRef();

  const onClickHandler = useCallback(
    (item) => {
      dispatch(onClick(item));
    },
    [item, onClick]
  );

  return (
    <>
      <label
        htmlFor={ID}
        className={`radio__label ${active ? "active" : null}`}
        ref={label}
        onClick={() => onClickHandler(item)}
      >
        {children}
      </label>
      <input
        type="radio"
        ref={radio}
        id={ID}
        className="radio__input"
        name="rate"
      />
    </>
  );
};

RadioInner.propTypes = {
  children: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.any.isRequired,
};

export const Radio = memo(RadioInner);
