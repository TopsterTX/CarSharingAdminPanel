import React, { useState } from "react";
import "./Pages.scss";

export const Pages = () => {
  const [page, setPage] = useState(39);
  const [maxPage, setMaxPage] = useState(40);
  const [minPage, setMinPage] = useState(1);

  console.log(page);
  const leftArrowHandler = () => {
    if (page === 1) return;
    setPage((p) => page - 1);
  };

  const rightArrowHandler = () => {
    if (page === maxPage) return;
    setPage((p) => page + 1);
  };

  return (
    <section className="pages">
      <div className="pages__container">
        <button className="pages__arrow" onClick={() => leftArrowHandler()}>
          {"<"}
        </button>
        <div className="pages__wrapper">
          <button
            className={`pages__button ${page === minPage ? "active" : null}`}
          >
            {minPage}
          </button>
          <span>...</span>
          <button className={`pages__button ${page === 2 ? "active" : null}`}>
            {page > 2 && page <= maxPage - 3
              ? page - 1
              : page <= 2
              ? 2
              : page > maxPage - 3
              ? maxPage - 3
              : null}
          </button>
          <button
            className={`pages__button ${
              page >= 3 && page <= maxPage - 2 ? "active" : null
            }`}
          >
            {page > 2 && page <= maxPage - 2
              ? page
              : page <= 3
              ? 3
              : page > maxPage - 2
              ? maxPage - 2
              : null}
          </button>
          <button
            className={`pages__button ${
              page === maxPage - 1 ? "active" : null
            }`}
          >
            {page > 2 && page < maxPage - 1
              ? page + 1
              : page <= 2
              ? 4
              : page >= maxPage - 1
              ? maxPage - 1
              : null}
          </button>
          <span>...</span>
          <button
            className={`pages__button ${page === maxPage ? "active" : null}`}
          >
            {maxPage}
          </button>
        </div>
        <button className="pages__arrow" onClick={() => rightArrowHandler()}>
          {">"}
        </button>
      </div>
    </section>
  );
};
