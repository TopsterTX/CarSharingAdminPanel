import React from "react";
import ReactDom from "react-dom";

export function Loader() {
  return ReactDom.createPortal(
    <div className="loader">
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
