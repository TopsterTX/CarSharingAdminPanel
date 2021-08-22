import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Selector.scss";

export function Selector({ children, array = [], sortId, content, onClick }) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState(null);

  const clickHandler = (el) => {
    setText((t) => el[`${content}`]);
    onClick();
  };

  return (
    <div key={uuidv4()} className="selector">
      <div
        className="selector__block"
        onClick={() => setActive((active) => !active)}
      >
        <span>{text ? text : children}</span>
        <ul className={`selector__list ${active ? "active" : null}`}>
          {sortId
            ? array.map((el) => {
                if (el.cityId.id === sortId) {
                  return (
                    <li
                      className="selector__item"
                      onClick={() => clickHandler(el)}
                    >
                      {el[`${content}`]}
                    </li>
                  );
                } else {
                  return;
                }
              })
            : array.map((el) => {
                return (
                  <li
                    className="selector__item"
                    onClick={() => clickHandler(el)}
                  >
                    {el[`${content}`]}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
