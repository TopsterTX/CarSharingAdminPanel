import React from "react";
import "./Pages.scss";

export const Pages = () => {
  return (
    <section className="pages">
      <div className="pages__container">
        <div className="pages__wrapper">
          <button className="pages__button">1</button>
          <span>...</span>
          <button className="pages__button">4</button>
          <button className="pages__button active">5</button>
          <button className="pages__button">6</button>
          <span>...</span>
          <button className="pages__button">31</button>
        </div>
      </div>
    </section>
  );
};
