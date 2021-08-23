import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Selector.scss";

const Selector = ({ children, array = [], sortId, content, onClick }) => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState(null);
  const clickHandler = (el) => {
    if (content === "el") {
      setText((t) => el);
    }
    setText((t) => el[`${content}`]);
    onClick(el);
  };

  const displayHeandler = () => {
    if (sortId) {
      return array.map((el) => {
        if (el.cityId && el.cityId.id === sortId) {
          return (
            <li
              className="selector__item"
              key={el.id}
              onClick={() => clickHandler(el)}
            >
              {content === "el" ? el : el[`${content}`]}
            </li>
          );
        } else {
          return;
        }
      });
    } else {
      return array.map((el) => {
        return (
          <li
            key={el.id}
            className="selector__item"
            onClick={() => clickHandler(el)}
          >
            {content === "el" ? el : el[`${content}`]}
          </li>
        );
      });
    }
  };

  return (
    <div key={uuidv4()} className="selector">
      <div
        className="selector__block"
        onClick={() => setActive((active) => !active)}
      >
        <span>{text ? text : children}</span>
        <ul className={`selector__list ${active ? "active" : null}`}>
          {displayHeandler()}
        </ul>
      </div>
    </div>
  );
};

Selector.propTypes = {
  sortId: PropTypes.string,
  content: PropTypes.string,
  array: PropTypes.array,
  onClick: PropTypes.func,
  children: PropTypes.elementType,
};

export default Selector;