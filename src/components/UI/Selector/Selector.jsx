import React from "react";
import {v4 as uuidv4} from 'uuid'
import "./Selector.scss";

export function Selector({ text,  array, arrayContent }) {

  let key = uuidv4()
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
