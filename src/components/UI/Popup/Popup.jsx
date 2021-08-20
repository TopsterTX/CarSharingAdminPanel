import React from "react";
import { useSelector } from "react-redux";
import ReactDom from "react-dom";
import "./Popup.scss";

export function Popup({ children }) {
  const { isActive } = useSelector((state) => state.popup);

  return ReactDom.createPortal(
    <div className={`popup ${isActive ? "active" : null}`}>
      <div className="popup__container">
        <div className="popup__block">{children}</div>
      </div>
    </div>,
    document.getElementById("popup")
  );
}
