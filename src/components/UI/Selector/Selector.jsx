import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { applyCategory } from "../../../redux/actions/carCard/carCard";
import "./Selector.scss";

export function Selector({ children, array, arrayContent, onClick }) {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  const [active, setActive] = useState(false);

  const clickHandler = (el) => {
    setText((t) => el[`${arrayContent}`]);
    dispatch(onClick(el));
  };

  return (
    <div key={uuidv4()} className="selector">
      <div
        className="selector__block"
        onClick={() => setActive((active) => !active)}
      >
        <span>{text ? text : children}</span>
        <ul className={`selector__list ${active ? "active" : null}`}>
          {array
            ? array.map((el) => {
                return (
                  <li
                    className="selector__item"
                    key={el.id}
                    onClick={() => clickHandler(el)}
                  >
                    {el[`${arrayContent}`]}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
