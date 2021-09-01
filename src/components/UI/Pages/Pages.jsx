import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./Pages.scss";

const PagesInner = ({
  page = 0,
  count = 0,
  divisor = 0,
  changePage = () => {},
}) => {
  const dispatch = useDispatch();
  const [maxPage, setMaxPage] = useState(0);
  const [minPage, setMinPage] = useState(1);

  const pageHandler = (
    leftIndicator,
    curPage,
    rightIndicator,
    option = rightIndicator
  ) => {
    return page > 2 && page <= option
      ? curPage
      : page <= 2
      ? leftIndicator
      : page >= rightIndicator
      ? rightIndicator
      : null;
  };

  let leftPage = pageHandler(2, page - 1, maxPage - 3);
  let middlePage = pageHandler(3, page, maxPage - 2);
  let rightPage = pageHandler(4, page + 1, maxPage - 1, maxPage - 2);
  const leftArrowHandler = () => {
    if (page === 1) return;
    dispatch(changePage(page - 1));
  };

  const rightArrowHandler = () => {
    if (page === maxPage) return;
    dispatch(changePage(page + 1));
  };

  const buttonClickedHandler = (e) => {
    dispatch(changePage(Number(e.target.textContent)));
  };

  const displayPageHandler = () => {
    let pages = [];
    for (let i = 0; i < maxPage; i++) {
      pages.push(i + 1);
    }
    return pages.map((el) => {
      return (
        <button
          className={`pages__button ${page === el ? "active" : null} `}
          onClick={(e) => buttonClickedHandler(e)}
        >
          <span>{el}</span>
        </button>
      );
    });
  };

  useEffect(() => {
    setMaxPage((p) => Math.ceil(count / divisor));
  }, [count]);
  if (maxPage < 5) {
    return (
      <section className="pages">
        <div className="pages__container">
          <button
            className="pages__arrow --left"
            onClick={() => leftArrowHandler()}
          >
            <span>^</span>
            <span>^</span>
          </button>
          <div className="pages__wrapper">{displayPageHandler()}</div>
          <button
            className="pages__arrow --right"
            onClick={() => rightArrowHandler()}
          >
            <span>^</span>
            <span>^</span>
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="pages">
        <div className="pages__container">
          <button
            className="pages__arrow --left"
            onClick={() => leftArrowHandler()}
          >
            <span>^</span>
            <span>^</span>
          </button>
          <div className="pages__wrapper">
            <button
              className={`pages__button ${page === minPage ? "active" : null} `}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{minPage}</span>
            </button>
            <button className={`pages__button`}>
              <span>...</span>
            </button>

            <button
              className={`pages__button ${page === 2 ? "active" : null}`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{leftPage}</span>
            </button>
            <button
              className={`pages__button ${
                page >= 3 && page <= maxPage - 2 ? "active" : null
              }`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{middlePage}</span>
            </button>
            <button
              className={`pages__button ${
                page === maxPage - 1 ? "active" : null
              }`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{rightPage}</span>
            </button>
            <button className={`pages__button `}>
              <span>...</span>
            </button>
            <button
              className={`pages__button ${page === maxPage ? "active" : null}`}
              onClick={(e) => buttonClickedHandler(e)}
            >
              <span>{maxPage}</span>
            </button>
          </div>
          <button
            className="pages__arrow --right"
            onClick={() => rightArrowHandler()}
          >
            <span>^</span>
            <span>^</span>
          </button>
        </div>
      </section>
    );
  }
};

PagesInner.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
  divisor: PropTypes.number,
  changePage: PropTypes.func.isRequired,
};

export const Pages = memo(PagesInner);
