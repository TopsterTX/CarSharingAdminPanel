import React, { useState } from "react";
import "./Pages.scss";

export const Pages = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(31);
  const [minPage, setMinPage] = useState(1);


  return (
    <section className="pages">
      <div className="pages__container">
        <div className="pages__wrapper">
          <button
            className={`pages__button ${page == minPage ? "active" : null}`}
          >
            {minPage}
          </button>
          <span>...</span>
          <button className={`pages__button `}>
            {page == 1 ? 2 : page - 1}
          </button>
          <button className={`pages__button `}>{page == 1 ? 3 : page}</button>
          <button className={`pages__button`}>
            {page == 1 ? 4 : page + 1}
          </button>
          <span>...</span>
          <button
            className={`pages__button ${page == maxPage ? "active" : null}`}
          >
            {maxPage}
          </button>
        </div>
      </div>
    </section>
  );
};
