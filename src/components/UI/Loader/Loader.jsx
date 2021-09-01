import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import "./Loader.scss";

export function Loader() {
  const { isActive } = useSelector((state) => state.loader);

  return ReactDom.createPortal(
    <div className={`loader__item ${isActive ? "active" : null}`}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>,
    document.getElementById("loader")
  );
}
