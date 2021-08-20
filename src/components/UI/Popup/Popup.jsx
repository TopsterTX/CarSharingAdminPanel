import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePopup } from "../../../redux/actions/popup/popup";
import ReactDom from "react-dom";
import "./Popup.scss";

export function Popup({ children }) {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.popup);
  return ReactDom.createPortal(
    <div
      className={`popup ${isActive ? "active" : null}`}
    >
      <div className="popup__container">
        <div className="popup__block">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
}
