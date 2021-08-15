import React from "react";
import "./Selector.scss";

export function Selector({ text, key, array, arrayContent }) {
  return (
    <div key={key} className="selector">
      <ul className="selector__list">
        <span>{text}</span>
        {array
          ? array.map((el) => {
              if (arrayContent === "point") {
                return <li className="selector__item">{el.address}</li>;
              }
              return <li className="selector__item">{el.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
