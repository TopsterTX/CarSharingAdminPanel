import React from "react";
import "./Selector.scss";

export function Selector({ text, key }) {
  return (
    <div key={key} className="selector">
      <ul className="selector__list">
        <span>{text}</span>
      </ul>
    </div>
  );
}
