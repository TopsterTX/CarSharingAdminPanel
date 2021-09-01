import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ReactDom from "react-dom";
import "./Popup.scss";

const Popup = ({ children, type }) => {
  const { openedCreatePopup, openedChangePopup } = useSelector(
    (state) => state.popup
  );

  return ReactDom.createPortal(
    <div
      className={`popup 
        ${openedCreatePopup && type === "create" ? "active" : null}
        ${openedChangePopup && type === "change" ? "active" : null}
        `}
    >
      <div className="popup__container">
        <div className="popup__block">{children}</div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};

Popup.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Popup;
